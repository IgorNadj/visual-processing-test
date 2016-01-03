console.log('yo');

var DB_URL = 'https://amber-torch-480.firebaseio.com/';
var BEFORE_AFTER_SET = ['before', 'after'];

// load 
$(function(){

	var mySubmissionKey = (new URI(window.location.href)).search(true).key;

	var jsonUrl = DB_URL + '.json';
	$.get(jsonUrl, function(data){
		console.log('loaded ', data);
		var info = analyse(data);
		showResults(info);
	});

	var analyse = function(data){
		var resultsByImage = {};
		var resultsBySubmission = {};

		var submissionKeys = Object.keys(data);
		for(var i in submissionKeys){
			var submissionKey = submissionKeys[i];
			var entry = data[submissionKey];
			for(var j in entry.data){
				var entrySession = entry.data[j];
				for(var k in entrySession){
					var entrySessionImage = entrySession[k];
					var imageId = entrySessionImage.imageSet.id;
					if(!resultsByImage[imageId]){ 
						resultsByImage[imageId] = {
							numShown: 0,
							numControl: 0,
							category: entrySessionImage.imageSet.category,
							before: {
								numHit: 0,
								numMiss: 0,
								numFalseAlarm: 0,
								numCorrectRejection: 0
							},
							after: {
								numHit: 0,
								numMiss: 0,
								numFalseAlarm: 0,
								numCorrectRejection: 0
							}
						};
					}
					if(!resultsBySubmission[submissionKey]){
						resultsBySubmission[submissionKey] = {
							numShown: 0,
							numControl: 0,
							numTestPeople: 0,
							numTestAnimals: 0,
							before: {
								numHit: 0,
								numMiss: 0,
								numFalseAlarm: 0,
								numCorrectRejection: 0
							},
							after: {
								numHit: 0,
								numMiss: 0,
								numFalseAlarm: 0,
								numCorrectRejection: 0
							}
						}
					}
					var usedControl = entrySessionImage.showControl == true;
					var isPerson = entrySessionImage.imageSet.category == 'people';
					resultsByImage[imageId].numShown++;
					resultsBySubmission[submissionKey].numShown++;
					if(usedControl){
						resultsByImage[imageId].numControl++;
						resultsBySubmission[submissionKey].numControl++;
					}else{
						if(isPerson){
							resultsBySubmission[submissionKey].numTestPeople++;
						}else{
							resultsBySubmission[submissionKey].numTestAnimals++;
						}
					}
					for(var l in BEFORE_AFTER_SET){
						var beforeAfter = BEFORE_AFTER_SET[l];
						var isHit;
						var isMiss;
						var isFalseAlarm;
						var isCorrectRejection;
						var answer = entrySessionImage[beforeAfter+'TestAnswer'];
						
						if(usedControl){
							isHit = false;
							isMiss = false;
							isFalseAlarm = answer == true;
							isCorrectRejection = answer == false;
						}else{
							// - Person shown and "I see a person" = Hit
							// - Person shown and "I do not see a person" = Miss
							// - Animal shown and "I see a person" = Miss
							// - Animal shown and "I do not see a person" = Hit
							isHit = (isPerson && answer == true) || (!isPerson && answer == false);
							isMiss = (isPerson && answer == false) || (!isPerson && answer == true);
							isFalseAlarm = false;
							isCorrectRejection = false;
						}
						if(isHit){
							resultsByImage[imageId][beforeAfter].numHit++;
							resultsBySubmission[submissionKey][beforeAfter].numHit++;
						}
						if(isMiss){
							resultsByImage[imageId][beforeAfter].numMiss++;
							resultsBySubmission[submissionKey][beforeAfter].numMiss++;
						}
						if(isFalseAlarm){
							resultsByImage[imageId][beforeAfter].numFalseAlarm++;
							resultsBySubmission[submissionKey][beforeAfter].numFalseAlarm++;
						}
						if(isCorrectRejection){
							resultsByImage[imageId][beforeAfter].numCorrectRejection++;
							resultsBySubmission[submissionKey][beforeAfter].numCorrectRejection++;
						}
					}
				}
			}
		}

		// Distribution
		var distribution = {
			before: {
				hitRate: {
					data: [],
					average: null,
					standardDeviation: null
				},
				falseAlarmRate: {
					data: [],
					average: null,
					standardDeviation: null	
				}
			},
			after: {
				hitRate: {
					data: [],
					average: null,
					standardDeviation: null
				},
				falseAlarmRate: {
					data: [],
					average: null,
					standardDeviation: null	
				}
			}
		};
		// Aggregates
		var aggregateResults = {
			before: {
				discriminationSensitivy: {
					data: [],
					average: null,
					standardDeviation: null,
					standardErrorMean: null
				},
				criterion: {
					data: [],
					average: null,
					standardDeviation: null,
					standardErrorMean: null
				}
			},
			after: {
				discriminationSensitivy: {
					data: [],
					average: null,
					standardDeviation: null,
					standardErrorMean: null
				},
				criterion: {
					data: [],
					average: null,
					standardDeviation: null,
					standardErrorMean: null
				}
			}
		};
		
		// Analyse each submission (Part 1.)
		for(var i in submissionKeys){
			var submissionKey = submissionKeys[i];
			for(var j in BEFORE_AFTER_SET){
				var beforeAfter = BEFORE_AFTER_SET[j];
				var data = resultsBySubmission[submissionKey][beforeAfter];
				var hitRate = data.numHit / (data.numHit + data.numMiss);
				var falseAlarmRate = data.numFalseAlarm / (data.numFalseAlarm + data.numCorrectRejection);
				resultsBySubmission[submissionKey][beforeAfter].hitRate = hitRate;
				resultsBySubmission[submissionKey][beforeAfter].falseAlarmRate = falseAlarmRate;
				// resultsBySubmission[submissionKey][beforeAfter].discriminationSensitivy = null;
				distribution[beforeAfter].hitRate.data.push(hitRate);
				distribution[beforeAfter].falseAlarmRate.data.push(falseAlarmRate);
			}
		}

		// Calculate distribution	
		for(var i in BEFORE_AFTER_SET){
			var beforeAfter = BEFORE_AFTER_SET[i];
			distribution[beforeAfter].hitRate.average = math.mean(distribution[beforeAfter].hitRate.data);
			distribution[beforeAfter].hitRate.standardDeviation = math.std(distribution[beforeAfter].hitRate.data);
			distribution[beforeAfter].falseAlarmRate.average = math.mean(distribution[beforeAfter].falseAlarmRate.data);
			distribution[beforeAfter].falseAlarmRate.standardDeviation = math.std(distribution[beforeAfter].falseAlarmRate.data);
		}
		console.log('distribution', distribution);

		// Analyse each submission (Part 2.)
		for(var i in submissionKeys){
			var submissionKey = submissionKeys[i];
			for(var j in BEFORE_AFTER_SET){
				var beforeAfter = BEFORE_AFTER_SET[j];
				var submissionData = resultsBySubmission[submissionKey][beforeAfter];
				var distributionData = distribution[beforeAfter];
				
				// zHitRate is z(h) in the study, which is the Inverse Cumulative Distribution Function (InverseCDF)
				// zFalseAlarmRate is z(f) in the study, same as above
				var zHitRate;
				var zFalseAlarmRate;

				// we have to adjust our rates because passing 0 or 1 (0% or 100%) really messes with this statistical function
				var adjustedHitRate = submissionData.hitRate;
				if(submissionData.hitRate == 0) adjustedHitRate = 0.0001;
				if(submissionData.hitRate == 1) adjustedHitRate = 0.9999;
				var adjustedFalseAlarmRate = submissionData.falseAlarmRate;
				if(submissionData.falseAlarmRate == 0) adjustedFalseAlarmRate = 0.0001;
				if(submissionData.falseAlarmRate == 1) adjustedFalseAlarmRate = 0.9999;
				
				var zHitRate = jStat.normal.inv(adjustedHitRate, distributionData.hitRate.average, distributionData.hitRate.standardDeviation);
				var zFalseAlarmRate = jStat.normal.inv(adjustedFalseAlarmRate, distributionData.falseAlarmRate.average, distributionData.falseAlarmRate.standardDeviation);
				
				resultsBySubmission[submissionKey][beforeAfter].zHitRate = zHitRate;
				resultsBySubmission[submissionKey][beforeAfter].zFalseAlarmRate = zFalseAlarmRate;

				// distributionSensitivity is d' in the study, z(h) - z(f)
				var discriminationSensitivy = zHitRate - zFalseAlarmRate;
				resultsBySubmission[submissionKey][beforeAfter].discriminationSensitivy = discriminationSensitivy;

				// criterion is c in the study, or -1/2 * [z(h) + z(f)]
				var criterion = -1 / 2 * (zHitRate + zFalseAlarmRate);
				resultsBySubmission[submissionKey][beforeAfter].criterion = criterion;

				// store for aggregate
				aggregateResults[beforeAfter].discriminationSensitivy.data.push(discriminationSensitivy);
				aggregateResults[beforeAfter].criterion.data.push(criterion);
			}

			// performanceBenefit is d' diff in the study, or the performance benefit due to prior knowledge
			var performanceBenefit = resultsBySubmission[submissionKey]['after'].discriminationSensitivy - resultsBySubmission[submissionKey]['before'].discriminationSensitivy;
			resultsBySubmission[submissionKey].performanceBenefit = performanceBenefit;
		}
		

		//console.log('resultsByImage', resultsByImage, JSON.stringify(resultsByImage));
		console.log('resultsBySubmission', resultsBySubmission);

		// Calculate aggregate data
		for(var i in BEFORE_AFTER_SET){
			var beforeAfter = BEFORE_AFTER_SET[i];
			aggregateResults[beforeAfter].discriminationSensitivy.average = math.mean(aggregateResults[beforeAfter].discriminationSensitivy.data);
			aggregateResults[beforeAfter].discriminationSensitivy.standardDeviation = math.std(aggregateResults[beforeAfter].discriminationSensitivy.data);
			aggregateResults[beforeAfter].discriminationSensitivy.standardErrorMean = aggregateResults[beforeAfter].discriminationSensitivy.standardDeviation / Math.sqrt(submissionKeys.length);
			aggregateResults[beforeAfter].criterion.average = math.mean(aggregateResults[beforeAfter].criterion.data);
			aggregateResults[beforeAfter].criterion.standardDeviation = math.std(aggregateResults[beforeAfter].criterion.data);
			aggregateResults[beforeAfter].criterion.standardErrorMean = aggregateResults[beforeAfter].criterion.standardDeviation / Math.sqrt(submissionKeys.length);
		}
		console.log('aggregateResults', aggregateResults);

		// Done
		return {
			resultsBySubmission: resultsBySubmission,
			aggregateResults: aggregateResults
		};
	}

	var showResults = function(info){
		var performanceBenefitChartData = [];
		performanceBenefitChartData.push(['Submission Key', 'Performance Benefit', 'My Performance Benefit']);
		
		var submissionKeys = Object.keys(info.resultsBySubmission);
		for(var i in submissionKeys){
			var submissionKey = submissionKeys[i];
			var isMyDataPoint = submissionKey == mySubmissionKey;
			if(isMyDataPoint){
				performanceBenefitChartData.push([submissionKey, null, info.resultsBySubmission[submissionKey].performanceBenefit]);
			}else{
				performanceBenefitChartData.push([submissionKey, info.resultsBySubmission[submissionKey].performanceBenefit, null]);
			}
		}

		var performanceBenefitChartOptions = {
			title: 'Performance benefit from prior knowledge',
      		legend: { 
      			position: 'none' 
      		},
      		histogram: {
      			bucketSize: 0.05,
      		},
      		isStacked: true,
      		colors: ['#5CA5B9', 'orange']
      		
      	}

      	var performanceBenefitChart = new google.visualization.Histogram(document.getElementById('performance_benefit_chart'));
      	performanceBenefitChart.draw(google.visualization.arrayToDataTable(performanceBenefitChartData), performanceBenefitChartOptions);

      	// personal results
      	if(mySubmissionKey){
      		var myPerformanceBenefit = info.resultsBySubmission[mySubmissionKey].performanceBenefit;

      		var numPeopleScoredHigherThan = 0;
      		for(var i in submissionKeys){
      			var submissionKey = submissionKeys[i];
      			if(submissionKey == mySubmissionKey) continue;
      			if(info.resultsBySubmission[submissionKey].performanceBenefit < myPerformanceBenefit){
      				numPeopleScoredHigherThan++;
      			}
      		}

      		var myRanking = numPeopleScoredHigherThan / (submissionKeys.length - 1);
      		var myRankingPerc = Math.round(myRanking * 100);

      		$('#my_results').show();
      		$('#my_ranking').text(myRankingPerc);
      	}

      	// aggregate discrimination sensitivy results
      	var aggregateDSChartDataTable = new google.visualization.DataTable();
      	aggregateDSChartDataTable.addColumn('string', 'Block');
      	aggregateDSChartDataTable.addColumn('number', 'Values');
      	aggregateDSChartDataTable.addColumn({ id: 'topErrorBar', type: 'number', role: 'interval' });
		aggregateDSChartDataTable.addColumn({ id: 'bottomErrorBar', type: 'number', role: 'interval' });

		aggregateDSChartDataTable.addRow([
			'Before', 
			info.aggregateResults.before.discriminationSensitivy.average, 
			info.aggregateResults.before.discriminationSensitivy.average + info.aggregateResults.before.discriminationSensitivy.standardErrorMean,
			info.aggregateResults.before.discriminationSensitivy.average - info.aggregateResults.before.discriminationSensitivy.standardErrorMean
		]);
		aggregateDSChartDataTable.addRow([
			'After', 
			info.aggregateResults.after.discriminationSensitivy.average, 
			info.aggregateResults.after.discriminationSensitivy.average + info.aggregateResults.after.discriminationSensitivy.standardErrorMean, 
			info.aggregateResults.after.discriminationSensitivy.average - info.aggregateResults.after.discriminationSensitivy.standardErrorMean
		]);

		var aggregateDSChartOptions = {
			title: 'Discrimination sensitivity (d\')',
			intervals: { style: 'bars' },
			legend: 'none'
		}

		var aggregateDSChart = new google.visualization.LineChart(document.getElementById('aggregate_discrimination_sensitivity_chart'));
        aggregateDSChart.draw(aggregateDSChartDataTable, aggregateDSChartOptions);

        // aggregate criterion results
        var aggregateCriterionDataTable = new google.visualization.DataTable();
        aggregateCriterionDataTable.addColumn('string', 'Block');
        aggregateCriterionDataTable.addColumn('number', 'Values');
        aggregateCriterionDataTable.addColumn({ id: 'topErrorBar', type: 'number', role: 'interval' });
		aggregateCriterionDataTable.addColumn({ id: 'bottomErrorBar', type: 'number', role: 'interval' });

		aggregateCriterionDataTable.addRow([
			'Before', 
			info.aggregateResults.before.criterion.average, 
			info.aggregateResults.before.criterion.average + info.aggregateResults.before.criterion.standardErrorMean,
			info.aggregateResults.before.criterion.average - info.aggregateResults.before.criterion.standardErrorMean
		]);
		aggregateCriterionDataTable.addRow([
			'After', 
			info.aggregateResults.after.criterion.average, 
			info.aggregateResults.after.criterion.average + info.aggregateResults.after.criterion.standardErrorMean, 
			info.aggregateResults.after.criterion.average - info.aggregateResults.after.criterion.standardErrorMean
		]);

		var aggregateCriterionChartOptions = {
			title: 'Response bias (criterion)',
			intervals: { style: 'bars' },
			legend: 'none'
		}
		var aggregateCriterionChart = new google.visualization.LineChart(document.getElementById('aggregate_criterion_chart'));
        aggregateCriterionChart.draw(aggregateCriterionDataTable, aggregateCriterionChartOptions);

		// Display
      	$('#loading').hide();
	}

});