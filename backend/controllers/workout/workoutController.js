import Workout from "../../models/workoutModel.js";
import asyncHandler from "express-async-handler";

// @desc    Create new workout
// @route   POST /api/workouts
// @access  Private
export const createNewWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds } = req.body;

  const workout = await Workout.create({
    name,
    exercises: exerciseIds,
  });

  res.json(workout);
});

// @desc   Get workout
// @route  GET /api/workout/:id
// @access Private

export const getWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id)
    .populate("exercises")
    .lean();

  const minutes = Math.ceil(workout.exercises.length * 3.75);

  res.json({ ...workout, minutes });
});

// @desc   Get workoutы
// @route  GET /api/workouts
// @access Private

export const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({}).populate("exercises");

  res.json(workouts);
});

// @desc    Update workout
// @route   PUT /api/workouts
// @access  Private
export const updateWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds, workoutId } = req.body;

  const workout = await Workout.findById(workoutId);

  if (!workout) {
    res.status(404);
    throw new Error("Данный тренировка не найдена!");
  }

  workout.name = name;
  workout.exercises = exerciseIds;

  const updatedWorkout = await workout.save();

  res.json(updatedWorkout);
});

// @desc    Delete workout
// @route   DELETE /api/workouts
// @access  Private
export const deleteWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.body;

  const workout = await Workout.findById(workoutId);

  if (!workout) {
    res.status(404);
    throw new Error("Данные тренировки не найдены!");
  }

  await workout.remove();

  res.json({ message: "Тренировка удалена" });
});
