// Define Stroop Stims and create a random list (with a particular combination of consistent/inconsistent stims
	
	var consistent_stim = [{stimulus: '<p class = stroop-stim style = "color:red">RED</p>'},
						   {stimulus: '<p class = stroop-stim style = "color:blue">BLUE</p>'},
						   {stimulus: '<p class = stroop-stim style = "color:green">GREEN</p>'}];
							
	var inconsistent_stim = [{stimulus: '<p class = stroop-stim style = "color:red">BLUE</p>'},
							{stimulus: '<p class = stroop-stim style = "color:red">GREEN</p>'},
							{stimulus: '<p class = stroop-stim style = "color:blue">RED</p>'},
							{stimulus: '<p class = stroop-stim style = "color:blue">GREEN</p>'},
							{stimulus: '<p class = stroop-stim style = "color:green">RED</p>'},
							{stimulus: '<p class = stroop-stim style = "color:green">BLUE</p>'}];
							
	var stims = consistent_stim.concat(inconsistent_stim);
	
	var freq_shuffled_stims = jsPsych.randomization.repeat(stims, [8, 8, 8, 16, 16, 16, 16, 16, 16], true);

	var next_freq_stim = function() {
		return "<div class = centerbox>" + freq_shuffled_stims.stimulus.shift()+ "</div>"
	}
	
	var infreq_shuffled_stims = jsPsych.randomization.repeat(stims, [32, 32, 32, 4, 4, 4, 4, 4, 4], true);

	var next_infreq_stim = function() {
		return "<div class = centerbox>" + infreq_shuffled_stims.stimulus.shift() + "</div>"
	}
	
	var practice_stims = jsPsych.randomization.repeat(stims, [2,2,1,1,1,2,0,1,0], true);

	var next_practice_stim = function() {
		return "<div class = centerbox>" + practice_stims.stimulus.shift()+ "</div>"
	}
	
	var fixation = {
		type: "single-stim",
		stimuli: ["<div class = centerbox><p class = 'stroop-stim'>+</p></div>"],
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
		choices: [82, 66, 71],
		data: {type: 'stroop_frequent'}
	}
	
	var infreq_stroop_stim = {
		type: "single-stim",
		stimuli: next_infreq_stim,
		is_html: true,
		choices: [82, 66, 71],
		data: {type: 'stroop_infrequent'}
	}

	var practice_stroop_stim = {
		type: "single-stim",
		stimuli: next_practice_stim,
		is_html: true,
		choices: [82, 66, 71],
		prompt: '<div class = centerinstructions style = text-align:center><p>Keys: <span class="large"' + 
		'style = "color:red">R</span> <span class="large"style = "color:blue">B</span> ' +
		'<span class="large"style = "color:green">G</span></div>',
		data: {type: 'stroop_practice'}
	}
	
