function normal_random(mean, variance) {
  if (mean == undefined)
    mean = 0.0;
  if (variance == undefined)
    variance = 1.0;
  var V1, V2, S;
  do {
    var U1 = Math.random();
    var U2 = Math.random();
    V1 = 2 * U1 - 1;
    V2 = 2 * U2 - 1;
    S = V1 * V1 + V2 * V2;
  } while (S > 1);

  X = Math.sqrt(-2 * Math.log(S) / S) * V1;
//Y = Math.sqrt(-2 * Math.log(S) / S) * V2;
  X = mean + Math.sqrt(variance) * X;
//Y = mean + Math.sqrt(variance) * Y ;
  return X;
}

//************************************
//Define Stims and startup variables
//************************************

//The first two stims are first-stage stims.
//The next four are second-stage

var experiment_stims = jsPsych.randomization.repeat(
	["'images/11.png'",
	 "'images/12.png'",
	 "'images/13.png'",
	 "'images/14.png'",
	 "'images/15.png'",
	 "'images/16.png'",],1)

var practice_dstims = jsPsych.randomization.repeat(
	["'images/80.png'",
	 "'images/81.png'",
	 "'images/82.png'",
	 "'images/83.png'",
	 "'images/84.png'",
	 "'images/85.png'",],1)
	
var all_stims = practice_dstims 
var condition = "practice"

// Actions for left and right
var actions = [37,39]
var practice_trial_num = 2
var test_trial_num = 2

//************************************
// Define first stage elements
//************************************

var set_up_first_stage = function(stims, trials) {
	var fs_stim = [
		{stimulus: 
			"<img class = 'decision-stim left' src=" + all_stims[0] + "></img>" +
			"<img class = 'decision-stim right' src=" + all_stims[1] + "></img>", 
			id: [0,1]},
		{stimulus: "<img class = 'decision-stim left' src=" + all_stims[1] + "></img>"+
			"<img class = 'decision-stim right' src=" + all_stims[0] + "></img>", 
			id: [1,0]}						
	]

	var fs_stim_shuffled = jsPsych.randomization.repeat(fs_stim, [trials/2,trials/2], true);
	
	return [fs_stim, fs_stim_shuffled]
}

temp = set_up_first_stage(all_stims,practice_trial_num)	
fs_stim = temp[0]
fs_stim_shuffled = temp[1]
	
var current_trial = -1
var current_choice = -1

var choose_first_stage = function() {
	current_trial = current_trial + 1
	return fs_stim_shuffled.stimulus.shift()
}

var get_first_selected = function() {
	var global_trial = jsPsych.progress().current_trial_global
	var first_stage_trial = jsPsych.data.getData()[global_trial-1]
	var stim_ids = fs_stim_shuffled.id[current_trial]
	var action = actions.indexOf(first_stage_trial.key_press)
	if (action == 0) {
	return "<img class = 'decision-stim left selected' src=" + all_stims[stim_ids[0]] + ">" +
			"<img class = 'decision-stim right' src=" + all_stims[stim_ids[1]] + ">"
	} else if (action == 1) {return "<img class = 'decision-stim left' src=" + all_stims[stim_ids[0]] + ">" +
			"<img class = 'decision-stim right selected' src=" + all_stims[stim_ids[1]] + ">"}
}

//************************************
// Define second stage elements. Each stage is composed of two stimuli which can appear
// in either position (left or right), but maintain the same id, defined by the id_array.
//************************************

var set_up_second_stage = function(stims) {

	var ss_stim_array = [
			["<img class = 'decision-stim left' src=" + stims[2]+ "></img>" + 
			"<img class = 'decision-stim right' src=" + stims[3]+ "></img>", 
			"<img class = 'decision-stim left' src=" + stims[3]+ "></img>" + 
			"<img class = 'decision-stim right' src=" + stims[2]+ "></img>"],
			["<img class = 'decision-stim left' src=" + stims[4]+ "></img>" + 
			"<img class = 'decision-stim right' src=" + stims[5]+ "></img>", 
			"<img class = 'decision-stim left' src=" + stims[5]+ "></img>" + 
			"<img class = 'decision-stim right' src=" + stims[4]+ "></img>"]
	]	

	var second_stage_stim = {
		stimulus: [ss_stim_array[0][0], ss_stim_array[0][1], ss_stim_array[1][0], ss_stim_array[1][1]],
		id: [[2,3],[3,2],[4,5],[5,4]]
	}
	
	return second_stage_stim
}

var second_stage_stim = set_up_second_stage(all_stims)

var FB_on = 1
var choose_second_stage = function() {
	var global_trial = jsPsych.progress().current_trial_global
	var first_stage_trial = jsPsych.data.getData()[global_trial-3]
	var stim_ids = fs_stim_shuffled.id[current_trial]
	var action = actions.indexOf(first_stage_trial.key_press)
	if (action == -1) {FB_on = 0;
		return "<div style = text-align:center><p style = font-size:30px>" +
	 							"Please respond faster </p></div>"}
	else {FB_on = 1;
		var stage = stim_ids[action]
		if (Math.random() < .3) {var stage = Math.abs(stage-1)}
		var stage = stage * 2
		return second_stage_stim.stimulus[stage + Math.round(Math.random())]}
}

var get_second_selected = function() {
	var global_trial = jsPsych.progress().current_trial_global
	var second_stage_trial = jsPsych.data.getData()[global_trial-1]
	var stim_index = second_stage_stim.stimulus.indexOf(second_stage_trial.stimulus)
	var stim_ids = second_stage_stim.id[stim_index]
	var action = actions.indexOf(second_stage_trial.key_press)
	if (action == 0) {
	return "<img class = 'decision-stim left selected' src=" + all_stims[stim_ids[0]] + ">" +
			"<img class = 'decision-stim right' src=" + all_stims[stim_ids[1]] + ">"
	} else if (action == 1) {return "<img class = 'decision-stim left' src=" + all_stims[stim_ids[0]] + ">" +
			"<img class = 'decision-stim right selected' src=" + all_stims[stim_ids[1]] + ">"}
}

// Defines the probability of getting reward. Each array is a 'column vector' and defines
// the rewards for one of the two stimuli. Each row is therefore a possible action


var initialize_FB_matrix = function() {
	return [Math.random()*.5+.25,Math.random()*.5+.25,Math.random()*.5+.25,Math.random()*.5+.25]
}
var FB_matrix = initialize_FB_matrix()

var update_FB = function() {
	for (i = 0; i < FB_matrix.length; i++) {
		var curr_value = FB_matrix[i]
		var step = normal_random(0,.025*.025)
		if (curr_value+step < .75 && curr_value+step > .25) {FB_matrix[i] = curr_value+step}
		else {FB_matrix[i] = curr_value - step}
	}
	console.log(FB_matrix)
}

var get_feedback = function() {
	var global_trial = jsPsych.progress().current_trial_global
	var second_stage_trial = jsPsych.data.getData()[global_trial-3]
	var index = second_stage_stim.stimulus.indexOf(second_stage_trial.stimulus)
	var stim_ids = second_stage_stim.id[index]
	var action = actions.indexOf(second_stage_trial.key_press)
	if (action == -1) {return "<div style = text-align:center><p style = font-size:30px>" +
							 "Please respond faster </p></div>"}
	else if (Math.random() < FB_matrix[stim_ids[action]-2]) {update_FB();
		return "<img class = 'decision-stim' src = 'images/gold_coin.png'></img>"}
	else {update_FB(); return "<div style = text-align:center><p style = 'color:red;font-size:60px'>" +
			"0</p></div>"}
}

// Switch from practice to test

var get_condition = function() {
	return condition
}

var get_current_trial = function() {
	return current_trial
}

var get_global_params = function() {
	params = {	
			actions: actions,
			stims: all_stims,
			fs_stim: fs_stim,
			second_stage_stim: second_stage_stim,
			condition: condition
		}
	return params
}

var change_stims = function() {
	if (all_stims == practice_dstims) {
		all_stims = experiment_stims;
		current_trial = -1;
		FB_matrix = initialize_FB_matrix();	
		temp = set_up_first_stage(all_stims,test_trial_num)	
		fs_stim = temp[0]
		fs_stim_shuffled = temp[1]
		second_stage_stim = set_up_second_stage(all_stims);
		condition = "test";
	} else {
		all_stims = practice_dstims; 
		current_trial = -1;
		FB_matrix = initialize_FB_matrix();
		temp = set_up_first_stage(all_stims,practice_trial_num)	
		fs_stim = temp[0]
		fs_stim_shuffled = temp[1]
		second_stage_stim = set_up_second_stage(all_stims);
		condition = "practice"}
}

//************************************
// Define the stages
//************************************

//Used to store global variables, not to display any information
var decision_globaldata = {
	type: "single-stim",
	stimuli: "",
	continue_after_response: false,
	is_html: true,
	timing_post_trial: 0,
	timing_stim: 5,
	timing_response: 5,
	global_params: get_global_params,
	data: {
		type: 'decision_global',
	}	
}


var d_intertrial_wait = {
	type: "single-stim",
	stimuli: "",
	continue_after_response: false,
	is_html: true,
	timing_post_trial: 0,
	timing_stim: 1000,
	timing_response: 1000
}

var first_stage = {
		type: "single-stim",
		stimuli: choose_first_stage,
		is_html: true,
		choices: actions,
		timing_stim: 2000,
		timing_response: 2000,
		show_response: true,
		timing_post_trial: 0,
		trial_count: get_current_trial,
		data: {type: 'decision_first'}
}

var first_stage_selected = {
	type: "single-stim",
	stimuli: get_first_selected,
	continue_after_response: false,
	is_html: true,
	timing_post_trial: 0,
	timing_stim: 500,
	timing_response: 500
}

var first_stage_chunk = {
	chunk_type: 'linear',
	timeline: [first_stage, first_stage_selected, d_intertrial_wait]
}

var second_stage = {
		type: "single-stim",
		stimuli: choose_second_stage,
		is_html: true,
		choices: actions,
		timing_stim: 2000,
		timing_response: 2000,
		timing_post_trial: 0,
		trial_count: get_current_trial,
		data: {type: 'decision_second'}
}	

var second_stage_selected = {
	type: "single-stim",
	stimuli: get_second_selected,
	continue_after_response: false,
	is_html: true,
	timing_post_trial: 0,
	timing_stim: 500,
	timing_response: 500
}


var FB_stage = {
		type: "single-stim",
		stimuli: get_feedback,
		is_html: true,
		choices: actions,
		timing_stim: 500,
		timing_response: 500,
		continue_after_response: false,
		timing_post_trial: 0,
		trial_count: get_current_trial,
		data: {type: 'decision_FB'}
}	


var FB_chunk = {
	chunk_type: 'if',
	timeline: [second_stage_selected, d_intertrial_wait, FB_stage, d_intertrial_wait],
	conditional_function: function() {
		return FB_on == 1
	}
}

var noFB_chunk = {
	chunk_type: 'if',
	timeline: [d_intertrial_wait],
	conditional_function: function() {
		return FB_on == 0
	}
}