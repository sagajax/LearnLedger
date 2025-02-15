import React from 'react';
import { GraduationCap, Wallet, Award, Bell, Calendar, Coins, BookOpen, Users } from 'lucide-react';

const BentoGrid = () => {
  return (
    <div className="w-full  p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Buy Courses Card - Spans 2 columns */}
        <div className="md:col-span-2 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all">
          {/* Base gradient with light coming from above */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950" />
          {/* Overlay gradient to enhance the light effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/30 via-transparent to-blue-950/70" />
          {/* Radial gradient overlay for the spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 via-transparent to-blue-950/50" />
          {/* Additional gradient for depth and contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-blue-900/30" />

          <div className="relative z-10 flex items-start justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Buy Courses</h2>
              <p className="text-blue-200 text-lg max-w-md">Invest in your future with premium courses. Learn at your own pace with lifetime access.</p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-xl flex items-center gap-3 text-white font-medium">
                <BookOpen size={20} />
                <span>Explore Library</span>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <GraduationCap className="text-blue-400" size={48} />
              <Wallet className="text-blue-400" size={48} />
            </div>
          </div>
        </div>

        {/* Learning Schedule Card */}
        <div className="rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all">
          {/* Base gradient with light coming from above */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950" />
          {/* Overlay gradient to enhance the light effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/30 via-transparent to-blue-950/70" />
          {/* Radial gradient overlay for the spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 via-transparent to-blue-950/50" />
          {/* Additional gradient for depth and contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-blue-900/30" />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4">Study Plan</h2>
            <p className="text-blue-200 mb-6">Automate your learning journey</p>
            <div className="space-y-4">
              <div className="bg-blue-950/50 p-4 rounded-xl flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium text-white">Python</p>
                    <p className="text-sm text-blue-300">3 hrs/week</p>
                  </div>
                </div>
                <span className="bg-blue-600/50 px-3 py-1 rounded-lg text-sm text-white">Daily</span>
              </div>
              <div className="bg-blue-950/50 p-4 rounded-xl flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Users className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium text-white">Group Study</p>
                    <p className="text-sm text-blue-300">2 hrs/day</p>
                  </div>
                </div>
                <span className="bg-blue-600/50 px-3 py-1 rounded-lg text-sm text-white">Weekly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Rewards Card */}
        <div className="rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all">
          {/* Base gradient with light coming from above */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950" />
          {/* Overlay gradient to enhance the light effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/30 via-transparent to-blue-950/70" />
          {/* Radial gradient overlay for the spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 via-transparent to-blue-950/50" />
          {/* Additional gradient for depth and contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-blue-900/30" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Rewards</h2>
                <p className="text-blue-200">Track learning tokens</p>
              </div>
              <Bell className="text-blue-400" size={32} />
            </div>
            <div className="space-y-4">
              <div className="bg-blue-950/50 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Coins className="text-yellow-400" size={24} />
                    <span className="text-white">Learning Coins</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">5,230</p>
                    <p className="text-green-400 text-sm">↑ 12.3%</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-950/50 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="text-purple-400" size={24} />
                    <span className="text-white">XP Points</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">1,850</p>
                    <p className="text-green-400 text-sm">↑ 8.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Card - Spans 2 columns */}
        <div className="md:col-span-2 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all">
          {/* Base gradient with light coming from above */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950" />
          {/* Overlay gradient to enhance the light effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/30 via-transparent to-blue-950/70" />
          {/* Radial gradient overlay for the spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 via-transparent to-blue-950/50" />
          {/* Additional gradient for depth and contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-blue-900/30" />

          <div className="relative z-10 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Learning Achievements</h2>
              <p className="text-blue-200 text-lg mb-6">Earn rewards by completing courses and helping peers</p>
              <div className="flex gap-6">
                <div className="text-center">
                  <Award className="text-yellow-400 mx-auto mb-2" size={40} />
                  <p className="text-white">Completed</p>
                  <p className="text-2xl font-bold text-white">24</p>
                </div>
                <div className="text-center">
                  <Calendar className="text-blue-400 mx-auto mb-2" size={40} />
                  <p className="text-white">Streak</p>
                  <p className="text-2xl font-bold text-white">15</p>
                </div>
                <div className="text-center">
                  <Coins className="text-green-400 mx-auto mb-2" size={40} />
                  <p className="text-white">Earned</p>
                  <p className="text-2xl font-bold text-white">2.5K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;