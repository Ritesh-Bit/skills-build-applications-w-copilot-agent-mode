import mongoose from 'mongoose';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { Leaderboard } from '../models/Leaderboard';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    // Clear existing data
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});

    // Create sample users
    const users = await User.create([
      {
        username: 'alice_runner',
        email: 'alice@example.com',
        password: 'hashed_password_1',
        profile: {
          firstName: 'Alice',
          lastName: 'Johnson',
          bio: 'Marathon runner and fitness enthusiast',
          avatar: 'https://avatar.example.com/alice.jpg',
        },
      },
      {
        username: 'bob_cyclist',
        email: 'bob@example.com',
        password: 'hashed_password_2',
        profile: {
          firstName: 'Bob',
          lastName: 'Smith',
          bio: 'Cycling is my passion',
          avatar: 'https://avatar.example.com/bob.jpg',
        },
      },
      {
        username: 'charlie_swimmer',
        email: 'charlie@example.com',
        password: 'hashed_password_3',
        profile: {
          firstName: 'Charlie',
          lastName: 'Brown',
          bio: 'Competitive swimmer',
          avatar: 'https://avatar.example.com/charlie.jpg',
        },
      },
      {
        username: 'diana_lifter',
        email: 'diana@example.com',
        password: 'hashed_password_4',
        profile: {
          firstName: 'Diana',
          lastName: 'Prince',
          bio: 'Strength training coach',
          avatar: 'https://avatar.example.com/diana.jpg',
        },
      },
      {
        username: 'evan_yogi',
        email: 'evan@example.com',
        password: 'hashed_password_5',
        profile: {
          firstName: 'Evan',
          lastName: 'Green',
          bio: 'Yoga instructor and wellness advocate',
          avatar: 'https://avatar.example.com/evan.jpg',
        },
      },
    ]);

    console.log(`Created ${users.length} users`);

    // Create sample teams
    const teams = await Team.create([
      {
        name: 'Cardio Champions',
        description: 'A team focused on running and cycling',
        createdBy: users[0]._id,
        members: [users[0]._id, users[1]._id],
      },
      {
        name: 'Strength Squad',
        description: 'For weightlifting and strength training enthusiasts',
        createdBy: users[3]._id,
        members: [users[2]._id, users[3]._id],
      },
      {
        name: 'Wellness Warriors',
        description: 'Holistic fitness and wellness team',
        createdBy: users[4]._id,
        members: [users[4]._id, users[0]._id, users[1]._id],
      },
    ]);

    console.log(`Created ${teams.length} teams`);

    // Assign teams to users
    await User.findByIdAndUpdate(users[0]._id, { team: teams[0]._id });
    await User.findByIdAndUpdate(users[1]._id, { team: teams[0]._id });
    await User.findByIdAndUpdate(users[2]._id, { team: teams[1]._id });
    await User.findByIdAndUpdate(users[3]._id, { team: teams[1]._id });
    await User.findByIdAndUpdate(users[4]._id, { team: teams[2]._id });

    // Create sample activities
    const now = new Date();
    const activities = await Activity.create([
      {
        userId: users[0]._id,
        type: 'running',
        title: 'Morning Run',
        description: '5K run in the park',
        duration: 30,
        calories: 350,
        intensity: 'high',
        date: new Date(now.getTime() - 1000 * 60 * 60 * 24), // 1 day ago
      },
      {
        userId: users[0]._id,
        type: 'running',
        title: 'Evening Jog',
        description: 'Casual neighborhood jog',
        duration: 25,
        calories: 280,
        intensity: 'moderate',
        date: new Date(now.getTime() - 1000 * 60 * 60 * 12), // 12 hours ago
      },
      {
        userId: users[1]._id,
        type: 'cycling',
        title: 'Mountain Bike Trail',
        description: '15 miles on technical trail',
        duration: 90,
        calories: 650,
        intensity: 'high',
        date: new Date(now.getTime() - 1000 * 60 * 60 * 48), // 2 days ago
      },
      {
        userId: users[1]._id,
        type: 'cycling',
        title: 'Road Bike Commute',
        description: 'Commuting to work',
        duration: 20,
        calories: 200,
        intensity: 'moderate',
        date: new Date(now.getTime() - 1000 * 60 * 60 * 36), // 36 hours ago
      },
      {
        userId: users[2]._id,
        type: 'swimming',
        title: 'Lap Swimming',
        description: '40 laps freestyle',
        duration: 60,
        calories: 500,
        intensity: 'high',
        date: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      },
      {
        userId: users[3]._id,
        type: 'weightlifting',
        title: 'Upper Body Strength',
        description: 'Bench press and pull-ups',
        duration: 75,
        calories: 400,
        intensity: 'high',
        date: new Date(now.getTime() - 1000 * 60 * 60 * 24), // 1 day ago
      },
      {
        userId: users[4]._id,
        type: 'yoga',
        title: 'Morning Yoga',
        description: 'Vinyasa flow session',
        duration: 60,
        calories: 150,
        intensity: 'moderate',
        date: new Date(now.getTime() - 1000 * 60 * 60 * 6), // 6 hours ago
      },
    ]);

    console.log(`Created ${activities.length} activities`);

    // Create sample workouts
    const workouts = await Workout.create([
      {
        userId: users[0]._id,
        name: 'Beginner 5K Training',
        description: 'Perfect for people starting their running journey',
        exercises: [
          { name: 'Warm-up jog', sets: 1, reps: 5 },
          { name: 'Main run', sets: 1, reps: 5 },
          { name: 'Cool-down walk', sets: 1, reps: 5 },
        ],
        duration: 30,
        difficulty: 'beginner',
        category: 'cardio',
      },
      {
        userId: users[1]._id,
        name: 'Intermediate Mountain Biking',
        description: 'Build endurance and technical skills',
        exercises: [
          { name: 'Flat terrain', sets: 1, reps: 10 },
          { name: 'Hills', sets: 3, reps: 8 },
          { name: 'Technical sections', sets: 2, reps: 6 },
        ],
        duration: 90,
        difficulty: 'intermediate',
        category: 'cardio',
      },
      {
        userId: users[2]._id,
        name: 'Advanced Swimming Routine',
        description: 'Competitive swimming preparation',
        exercises: [
          { name: 'Freestyle laps', sets: 8, reps: 5 },
          { name: 'Backstroke', sets: 4, reps: 5 },
          { name: 'Butterfly drill', sets: 3, reps: 4 },
        ],
        duration: 60,
        difficulty: 'advanced',
        category: 'cardio',
      },
      {
        userId: users[3]._id,
        name: 'Full Body Strength',
        description: 'Complete strength training workout',
        exercises: [
          { name: 'Squats', sets: 4, reps: 8 },
          { name: 'Bench press', sets: 4, reps: 6 },
          { name: 'Deadlifts', sets: 3, reps: 5 },
          { name: 'Pull-ups', sets: 3, reps: 8 },
        ],
        duration: 75,
        difficulty: 'intermediate',
        category: 'strength',
      },
      {
        userId: users[4]._id,
        name: 'Relaxing Yoga Flow',
        description: 'Gentle yoga for flexibility and relaxation',
        exercises: [
          { name: 'Sun salutations', sets: 1, reps: 5 },
          { name: 'Warrior poses', sets: 1, reps: 5 },
          { name: 'Stretching', sets: 1, reps: 10 },
        ],
        duration: 60,
        difficulty: 'beginner',
        category: 'flexibility',
      },
    ]);

    console.log(`Created ${workouts.length} workouts`);

    // Create leaderboard entries
    const leaderboardEntries = await Leaderboard.create([
      {
        userId: users[0]._id,
        teamId: teams[0]._id,
        score: 2500,
        rank: 1,
        totalActivities: 2,
        totalCalories: 630,
      },
      {
        userId: users[1]._id,
        teamId: teams[0]._id,
        score: 2200,
        rank: 2,
        totalActivities: 2,
        totalCalories: 850,
      },
      {
        userId: users[2]._id,
        teamId: teams[1]._id,
        score: 2100,
        rank: 3,
        totalActivities: 1,
        totalCalories: 500,
      },
      {
        userId: users[3]._id,
        teamId: teams[1]._id,
        score: 1950,
        rank: 4,
        totalActivities: 1,
        totalCalories: 400,
      },
      {
        userId: users[4]._id,
        teamId: teams[2]._id,
        score: 1800,
        rank: 5,
        totalActivities: 1,
        totalCalories: 150,
      },
    ]);

    console.log(`Created ${leaderboardEntries.length} leaderboard entries`);
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
