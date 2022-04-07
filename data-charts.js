//
// dashkit.js
//

'use strict';

// Audience chart

(function () {
	var chart = document.getElementById('audienceChart');

	if (typeof Chart !== 'undefined' && chart) {
		new Chart(chart, {
			type: 'line',
			options: {
				scales: {
					yAxes: [
						{
							id: 'yAxisOne',
							type: 'linear',
							display: 'auto',
							gridLines: {
								color: '#283E59',
								zeroLineColor: '#283E59'
							},
							ticks: {
								callback: function (value) {
									return value + 'k';
								}
							}
						},
						{
							id: 'yAxisTwo',
							type: 'linear',
							display: 'auto',
							gridLines: {
								color: '#283E59',
								zeroLineColor: '#283E59'
							},
							ticks: {
								callback: function (value) {
									return value + '%';
								}
							}
						}
					]
				}
			},
			data: {
				labels: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],
				datasets: [
					{
						label: 'Customers',
						data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
						yAxisID: 'yAxisOne'
					},
					{
						label: 'Sessions',
						data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
						yAxisID: 'yAxisOne',
						hidden: true
					},
					{
						label: 'Conversion',
						data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
						yAxisID: 'yAxisTwo',
						hidden: true
					},
					{
						label: 'Conversion',
						data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
						yAxisID: 'yAxisTwo',
						hidden: true
					}
				]
			}
		});
	}
})();

// Orders chart
(function () {
	var chart = document.getElementById('ordersChart');

	if (typeof Chart !== 'undefined' && chart) {
		new Chart(chart, {
			type: 'bar',
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								callback: function (value) {
									return '$' + value + 'k';
								}
							}
						}
					]
				}
			},
			data: {
				labels: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec'
				],
				datasets: [
					{
						label: 'Sales',
						data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
					},
					{
						label: 'Affiliate',
						data: [1, 2, 1, 3, 2, 2, 3, 1, 4, 2, 3, 1],
						backgroundColor: '#d2ddec',
						hidden: true
					}
				]
			}
		});
	}
})();

// Traffic chart
(function () {
	var chart = document.getElementById('trafficChart');

	if (typeof Chart !== 'undefined' && chart) {
		new Chart(chart, {
			type: 'doughnut',
			options: {
				tooltips: {
					callbacks: {
						afterLabel: function () {
							return '%';
						}
					}
				}
			},
			data: {
				labels: ['Sent', 'Opened', 'Clicked'],
				datasets: [
					{
						data: [60, 25, 15],
						backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC']
					},
					{
						data: [15, 45, 20],
						backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
						hidden: true
					}
				]
			}
		});
	}
})();
