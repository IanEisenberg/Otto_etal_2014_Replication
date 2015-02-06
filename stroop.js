// Define Stroop Stims and create a random list (with a particular combination of consistent/inconsistent stims
	var consistent_stim = [{stimulus: '<p class = center-content style = "color:red">RED</p>', key: 'J'},
						   {stimulus: '<p class = center-content style = "color:blue">BLUE</p>', key: 'K'},
						   {stimulus: '<p class = center-content style = "color:green">GREEN</p>', key: 'L'}];
							
	var inconsistent_stim = [{stimulus: '<p class = center-content style = "color:red">BLUE</p>', key: 'J'},
							{stimulus: '<p class = center-content style = "color:red">GREEN</p>', key: 'J'},
							{stimulus: '<p class = center-content style = "color:blue">RED</p>', key: 'K'},
							{stimulus: '<p class = center-content style = "color:blue">GREEN</p>', key: 'K'},
							{stimulus: '<p class = center-content style = "color:green">RED</p>', key: 'L'},
							{stimulus: '<p class = center-content style = "color:green">BLUE</p>', key: 'L'}];
							
	var stims = consistent_stim.concat(inconsistent_stim);
	
	//var freq_shuffled_stims = jsPsych.randomization.repeat(stims, [8, 8, 8, 16, 16, 16, 16, 16, 16], true);
	var freq_shuffled_stims = {stimulus: ['<p class = center-content style = "color:red">BLUE</p>']}
	
	var next_freq_stim = function() {
		return freq_shuffled_stims.stimulus.shift()
	}
	
	//var infreq_shuffled_stims = jsPsych.randomization.repeat(stims, [32, 32, 32, 4, 4, 4, 4, 4, 4], true);
	var infreq_shuffled_stims = {stimulus: ['<p class = center-content style = "color:red">BLUE</p>']}

	var next_infreq_stim = function() {
		return infreq_shuffled_stims.stimulus.shift()
	}
	
	var fixation = {
		type: "single-stim",
		stimuli: ["<p class = center-content style='font-size:40' >+</p>"],
		is_html: true,
		continue_after_response: false,
		timing_stim: 200,
		timing_response: 200
	}
	
	var intertrial_wait = {
		type: "single-stim",
		stimuli: [],
		continue_after_response: false,
		timing_stim: 250,
		timing_response: 250
	}
	
	var freq_stroop_stim = {
		type: "single-stim",
		stimuli: next_freq_stim,
		is_html: true,
		choices: ['J','K','L'],
		data: {type: 'frequent'}
	}
	
	var infreq_stroop_stim = {
		type: "single-stim",
		stimuli: next_infreq_stim,
		is_html: true,
		choices: ['J','K','L'],
		data: {type: 'infrequent'}
	}

	