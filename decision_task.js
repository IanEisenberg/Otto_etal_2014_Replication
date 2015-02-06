var id_array = jsPsych.randomization.repeat([0,1],1)

// Actions for left and right
var actions = [70, 75]

var fs_stim = [
	{stimulus: "<img src='stims/blue.png'></img><img src='stims/orange.png'></img>", id: id_array},
	{stimulus: "<img src='stims/orange.png'></img><img src='stims/blue.png'></img>", id: [Math.abs(id_array[0]-1), Math.abs(id_array[1]-1)]}						
]

var fs_stim_shuffled = jsPsych.randomization.repeat(fs_stim, [100,100], true);
	
var choose_first_stage = function() {
	return fs_stim_shuffled.stimulus.shift()
}

// Define second stage elements. Each stage is composed of two stimuli which can appear
// in either position (left or right), but maintain the same id, defined by the id_array.

var id_array2 = [0, 1, 2, 3]

var ss_stims = jsPsych.randomization.repeat(
	["<img src='stims/japanese_character1.png'></img>",
	"<img src='stims/japanese_character2.png'></img>",
	"<img src='stims/japanese_character3.jpeg'></img>",
	"<img src='stims/japanese_character4.png'></img>"],1)

var set_up_second_stage = function(stims) {

	var ss_stim_array = [
		jsPsych.randomization.repeat([stims[0]+stims[1], stims[1]+stims[0]],1),
		jsPsych.randomization.repeat([stims[2]+stims[3],stims[3]+stims[2]],1)
	]	

	var second_stage_stim = {
		stimulus: [ss_stim_array[0][0], ss_stim_array[0][1], ss_stim_array[1][0], ss_stim_array[1][1]],
		id: [[0,1],[1,0],[2,3],[3,4]]
	}
	
	return second_stage_stim
}

var second_stage_stim = set_up_second_stage(ss_stims)

var choose_second_stage = function() {
	var current_trial = jsPsych.progress().current_trial_global
	var first_stage_trial = jsPsych.data.getData()[current_trial-2]
	var stim_ids = fs_stim_shuffled.id[jsPsych.currentChunkID().slice(6,9)]
	var action = actions.indexOf(first_stage_trial.key_press)
	var stage = stim_ids[action]
	if (Math.random() < .001) {var stage = Math.abs(stage-1)}
	var stage = stage * 2
	if (action == -1) {return "<p> Please respond faster </p>"}
	else { return second_stage_stim.stimulus[stage + Math.round(Math.random())]}
}
	
// Defines the probability of getting reward. Each array is a 'column vector' and defines
// the rewards for one of the two stimuli. Each row is therefore a possible action



var FB_matrix = [Math.random()*.5+.25,Math.random()*.5+.25,Math.random()*.5+.25,Math.random()*.5+.25]

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

var update_FB = function() {
	for (i = 0; i < FB_matrix.length; i++) {
		var curr_value = FB_matrix[i]
		var step = normal_random(0,.025*.025)
		if (curr_value+step < .75 && curr_value+step > .25) {FB_matrix[i] = curr_value+step}
		else {FB_matrix[i] = curr_value - step}
	}
	
}

var get_feedback = function() {
	var current_trial = jsPsych.progress().current_trial_global
	var second_stage_trial = jsPsych.data.getData()[current_trial-2]
	var index = second_stage_stim.stimulus.indexOf(second_stage_trial.stimulus)
	var stim_ids = second_stage_stim.id[index]
	var action = actions.indexOf(second_stage_trial.key_press)
	if (action == -1) {return "<p> Please respond faster </p>"}
	else if (Math.random() > FB_matrix[stim_ids[action]]) {return "You've won!"}
	else {return "You've lost."}
}


// Define the stages


var d_intertrial_wait = {
	type: "single-stim",
	stimuli: "<p>waiting</p> ",
	continue_after_response: false,
	is_html: true,
	timing_stim: 100,
	timing_response: 100
}

var first_stage = {
		type: "single-stim",
		stimuli: choose_first_stage,
		is_html: true,
		choices: actions,
		timing_stim: 2000,
		timing_response: 2000,
		data: {stage: 'first'}
}

var second_stage = {
		type: "single-stim",
		stimuli: choose_second_stage,
		is_html: true,
		choices: actions,
		timing_stim: 2000,
		timing_response: 2000,
		data: {stage: 'second'}
}	
	
var FB_stage = {
		type: "single-stim",
		stimuli: get_feedback,
		is_html: true,
		choices: ['F','J'],
		timing_stim: 500,
		timing_response: 500,
		continue_after_response: false,
		data: {stage: 'FB'},
		on_finish: update_FB
}	