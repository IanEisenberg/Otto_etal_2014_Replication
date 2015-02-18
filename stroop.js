// Define Stroop Stims and create a random list (with a particular combination of consistent/inconsistent stims
	
	var consistent_stim = [{stimulus: '<p class = stroop-stim style = "color:red">RED</p>', key: 'J'},
						   {stimulus: '<p class = stroop-stim style = "color:blue">BLUE</p>', key: 'K'},
						   {stimulus: '<p class = stroop-stim style = "color:green">GREEN</p>', key: 'L'}];
							
	var inconsistent_stim = [{stimulus: '<p class = stroop-stim style = "color:red">BLUE</p>', key: 'J'},
							{stimulus: '<p class = stroop-stim style = "color:red">GREEN</p>', key: 'J'},
							{stimulus: '<p class = stroop-stim style = "color:blue">RED</p>', key: 'K'},
							{stimulus: '<p class = stroop-stim style = "color:blue">GREEN</p>', key: 'K'},
							{stimulus: '<p class = stroop-stim style = "color:green">RED</p>', key: 'L'},
							{stimulus: '<p class = stroop-stim style = "color:green">BLUE</p>', key: 'L'}];
							
	var stims = consistent_stim.concat(inconsistent_stim);
	
	var freq_shuffled_stims = jsPsych.randomization.repeat(stims, [8, 8, 8, 16, 16, 16, 16, 16, 16], true);
	var freq_shuffled_stims = jsPsych.randomization.repeat(stims, [1,1,1,0,0,0,0,0,0], true);

	var next_freq_stim = function() {
		return freq_shuffled_stims.stimulus.shift()
	}
	
	var infreq_shuffled_stims = jsPsych.randomization.repeat(stims, [32, 32, 32, 4, 4, 4, 4, 4, 4], true);
	var infreq_shuffled_stims = jsPsych.randomization.repeat(stims, [1,1,1,0,0,0,0,0,0], true);

	var next_infreq_stim = function() {
		return infreq_shuffled_stims.stimulus.shift()
	}
	
	var practice_stims = jsPsych.randomization.repeat(stims, [2,2,1,1,1,2,0,1,0], true);
	var next_practice_stim = function() {
		return practice_stims.stimulus.shift()
	}
	
	var fixation = {
		type: "single-stim",
		stimuli: ["<p class = stroop-stim>+</p>"],
		is_html: true,
		continue_after_response: false,
		timing_stim: 200,
		timing_response: 200,
		timing_post_trial: 0,
	}
	
	var intertrial_wait = {
		type: "single-stim",
		stimuli: [],
		continue_after_response: false,
		timing_stim: 250,
		timing_response: 250,
		timing_post_trial: 0
	}
	
	var freq_stroop_stim = {
		type: "single-stim",
		stimuli: next_freq_stim,
		is_html: true,
		choices: [37, 40, 39],
		data: {type: 'frequent'}
	}
	
	var infreq_stroop_stim = {
		type: "single-stim",
		stimuli: next_infreq_stim,
		is_html: true,
		choices: [37, 40, 39],
		data: {type: 'infrequent'}
	}

	var practice_stroop_stim = {
		type: "single-stim",
		stimuli: next_practice_stim,
		is_html: true,
		choices: [37, 40, 39],
		prompt: '<div style="position: absolute; bottom: 0px;"><p><span class="large"' + 
		'style = "color:red">RED WORD</span>: Press the "&larr;" key, ' + 
		'<span class="large" style = "color:blue">BLUE WORD</span>: Press the "&darr;" key, ' + 
		'<span class="large" style = "color:green">GREEN WORD</span>: Press the "&rarr;" key</p></div>',
		data: {type: 'practice'}
	}
	
