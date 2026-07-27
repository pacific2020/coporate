<script setup lang="ts">
import { ref } from 'vue'

// State management
const isSidebarCollapsed = ref(false)
const activeMenu = ref('dashboard')
const openSubmenu = ref<string | null>('charts')

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const toggleSubmenu = (menuName: string) => {
  openSubmenu.value = openSubmenu.value === menuName ? null : menuName
}
</script>

<template>
  <div class="min-h-screen bg-[#ecf0f5] text-[#333333] font-sans flex flex-col antialiased">
    
    <!-- 1. MAIN HEADER -->
    <header class="h-12 bg-[#3c8dbc] text-white flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <!-- Logo Branding -->
      <a 
        href="#" 
        class="bg-[#367fa9] h-full flex items-center justify-center font-bold text-lg px-4 transition-all duration-300 select-none"
        :class="isSidebarCollapsed ? 'w-12' : 'w-56'"
      >
        <span v-if="!isSidebarCollapsed"><b>Admin</b>LTE</span>
        <span v-else><b>A</b>LT</span>
      </a>

      <!-- Navbar Right Menu -->
      <div class="flex-1 flex items-center justify-between px-3">
        <!-- Sidebar Toggle Button -->
        <button 
          @click="toggleSidebar" 
          class="p-2 hover:bg-[#367fa9] rounded transition-colors text-white focus:outline-none"
          title="Toggle Navigation"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Right Navbar Icons -->
        <div class="flex items-center space-x-3 text-xs">
          <!-- Messages Dropdown -->
          <button class="p-2 hover:bg-[#367fa9] relative rounded">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="absolute top-1 right-1 bg-[#00a65a] text-white text-[10px] px-1 rounded-full font-bold">4</span>
          </button>

          <!-- Notifications Dropdown -->
          <button class="p-2 hover:bg-[#367fa9] relative rounded">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span class="absolute top-1 right-1 bg-[#f39c12] text-white text-[10px] px-1 rounded-full font-bold">10</span>
          </button>

          <!-- User Profile -->
          <div class="flex items-center space-x-2 pl-2 border-l border-[#367fa9]">
            <div class="w-7 h-7 rounded-full bg-slate-300 overflow-hidden border border-white">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" alt="User Avatar" class="w-full h-full object-cover" />
            </div>
            <span class="hidden sm:inline font-semibold">Alexander Pierce</span>
          </div>
        </div>
      </div>
    </header>

    <!-- WRAPPER BODY -->
    <div class="flex-1 flex relative">

      <!-- 2. MAIN SIDEBAR -->
      <aside 
        class="bg-[#222d32] text-[#b8c7ce] transition-all duration-300 flex flex-col shrink-0 min-h-[calc(100vh-3rem)]"
        :class="isSidebarCollapsed ? 'w-12' : 'w-56'"
      >
        <!-- User Panel -->
        <div v-if="!isSidebarCollapsed" class="p-3 bg-[#1a2226] flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-slate-400 overflow-hidden shrink-0">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" alt="User" />
          </div>
          <div class="text-xs overflow-hidden">
            <p class="font-bold text-white truncate">Alexander Pierce</p>
            <p class="text-[11px] text-[#00a65a] flex items-center space-x-1 mt-0.5">
              <span class="w-2 h-2 rounded-full bg-[#00a65a]"></span>
              <span>Online</span>
            </p>
          </div>
        </div>

        <!-- Sidebar Search -->
        <div v-if="!isSidebarCollapsed" class="p-2 bg-[#1a2226]">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              class="w-full bg-[#374850] text-xs text-white placeholder-gray-400 rounded px-3 py-1.5 focus:outline-none"
            />
          </div>
        </div>

        <!-- Navigation Menu Header -->
        <div v-if="!isSidebarCollapsed" class="px-3 py-2 text-[10px] font-bold text-[#4b646f] uppercase tracking-wider bg-[#1a2226]/50">
          Main Navigation
        </div>

        <!-- Navigation Items -->
        <nav class="flex-1 text-xs space-y-0.5">
          <!-- Dashboard Link -->
          <a 
            href="#" 
            @click.prevent="activeMenu = 'dashboard'"
            class="flex items-center px-3 py-2.5 transition-colors border-l-4"
            :class="activeMenu === 'dashboard' ? 'bg-[#1e282c] text-white border-[#3c8dbc]' : 'border-transparent hover:bg-[#1e282c] hover:text-white'"
          >
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            <span v-if="!isSidebarCollapsed" class="ml-3 font-medium">Dashboard v2</span>
          </a>

          <!-- Multi-level Menu (Charts) -->
          <div>
            <button 
              @click="toggleSubmenu('charts')"
              class="w-full flex items-center justify-between px-3 py-2.5 transition-colors border-l-4 border-transparent hover:bg-[#1e282c] hover:text-white"
            >
              <div class="flex items-center">
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"/>
                </svg>
                <span v-if="!isSidebarCollapsed" class="ml-3 font-medium">Charts</span>
              </div>
              <svg v-if="!isSidebarCollapsed" class="w-3 h-3 transition-transform" :class="openSubmenu === 'charts' ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <!-- Submenu items -->
            <div v-if="openSubmenu === 'charts' && !isSidebarCollapsed" class="bg-[#2c3b41] text-[#8aa4af]">
              <a href="#" class="block py-2 pl-10 pr-3 hover:text-white transition-colors">ChartJS</a>
              <a href="#" class="block py-2 pl-10 pr-3 hover:text-white transition-colors">Morris</a>
              <a href="#" class="block py-2 pl-10 pr-3 hover:text-white transition-colors">Flot</a>
            </div>
          </div>

          <!-- UI Elements -->
          <a href="#" class="flex items-center px-3 py-2.5 transition-colors border-l-4 border-transparent hover:bg-[#1e282c] hover:text-white">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <span v-if="!isSidebarCollapsed" class="ml-3 font-medium">UI Elements</span>
          </a>
        </nav>
      </aside>

      <!-- 3. CONTENT WRAPPER -->
      <main class="flex-1 p-4 md:p-6 overflow-x-hidden">
        
        <!-- Page Header & Breadcrumbs -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-300 mb-6 gap-2">
          <div>
            <h1 class="text-2xl font-light text-[#333333] inline-block">
              Dashboard <small class="text-sm text-gray-500 font-normal">Control panel v2.4.2</small>
            </h1>
          </div>
          <!-- Breadcrumb -->
          <div class="text-xs text-gray-500 flex items-center space-x-1">
            <a href="#" class="hover:underline flex items-center text-[#3c8dbc]">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Home
            </a>
            <span>/</span>
            <span class="text-gray-400">Dashboard</span>
          </div>
        </div>

        <!-- STATS INFO BOXES GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          
          <!-- Aqua Box -->
          <div class="bg-white rounded shadow-sm flex overflow-hidden border border-slate-200">
            <div class="w-20 bg-[#00c0ef] flex items-center justify-center text-white shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              </svg>
            </div>
            <div class="p-3 text-xs flex-1">
              <span class="uppercase font-semibold text-gray-500">CPU Traffic</span>
              <p class="text-xl font-bold text-gray-800 mt-1">90<small class="text-xs">%</small></p>
            </div>
          </div>

          <!-- Red Box -->
          <div class="bg-white rounded shadow-sm flex overflow-hidden border border-slate-200">
            <div class="w-20 bg-[#dd4b39] flex items-center justify-center text-white shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <div class="p-3 text-xs flex-1">
              <span class="uppercase font-semibold text-gray-500">Likes</span>
              <p class="text-xl font-bold text-gray-800 mt-1">41,410</p>
            </div>
          </div>

          <!-- Green Box -->
          <div class="bg-white rounded shadow-sm flex overflow-hidden border border-slate-200">
            <div class="w-20 bg-[#00a65a] flex items-center justify-center text-white shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
              </svg>
            </div>
            <div class="p-3 text-xs flex-1">
              <span class="uppercase font-semibold text-gray-500">Sales</span>
              <p class="text-xl font-bold text-gray-800 mt-1">760</p>
            </div>
          </div>

          <!-- Yellow Box -->
          <div class="bg-white rounded shadow-sm flex overflow-hidden border border-slate-200">
            <div class="w-20 bg-[#f39c12] flex items-center justify-center text-white shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <div class="p-3 text-xs flex-1">
              <span class="uppercase font-semibold text-gray-500">New Members</span>
              <p class="text-xl font-bold text-gray-800 mt-1">2,000</p>
            </div>
          </div>

        </div>

        <!-- ADMINLTE CONTENT BOX (TABLE) -->
        <div class="bg-white rounded shadow-sm border-t-3 border-[#3c8dbc] border-x border-b border-slate-200 mb-6">
          <!-- Box Header -->
          <div class="p-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-semibold text-sm text-gray-800">Latest Orders</h3>
            <div class="flex items-center space-x-2">
              <span class="bg-[#00a65a] text-white text-[10px] px-2 py-0.5 rounded font-semibold">New</span>
            </div>
          </div>

          <!-- Table Body -->
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead class="bg-gray-50 border-b border-gray-200 font-semibold text-gray-600">
                <tr>
                  <th class="p-3">Order ID</th>
                  <th class="p-3">Item</th>
                  <th class="p-3">Status</th>
                  <th class="p-3">Popularity</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 text-gray-700">
                <tr class="hover:bg-gray-50">
                  <td class="p-3 font-medium text-[#3c8dbc]">OR9842</td>
                  <td class="p-3">Call of Duty TV</td>
                  <td class="p-3">
                    <span class="bg-[#00a65a] text-white text-[10px] px-2 py-0.5 rounded">Shipped</span>
                  </td>
                  <td class="p-3">
                    <div class="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div class="bg-[#00c0ef] h-full w-3/4"></div>
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-3 font-medium text-[#3c8dbc]">OR1848</td>
                  <td class="p-3">Samsung Smart TV</td>
                  <td class="p-3">
                    <span class="bg-[#f39c12] text-white text-[10px] px-2 py-0.5 rounded">Pending</span>
                  </td>
                  <td class="p-3">
                    <div class="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div class="bg-[#f39c12] h-full w-1/2"></div>
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-3 font-medium text-[#3c8dbc]">OR7429</td>
                  <td class="p-3">iPhone 6 Plus</td>
                  <td class="p-3">
                    <span class="bg-[#dd4b39] text-white text-[10px] px-2 py-0.5 rounded">Delivered</span>
                  </td>
                  <td class="p-3">
                    <div class="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div class="bg-[#dd4b39] h-full w-full"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Box Footer -->
          <div class="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
            <a href="#" class="bg-[#3c8dbc] hover:bg-[#367fa9] text-white px-3 py-1.5 rounded font-medium transition-colors">Place New Order</a>
            <a href="#" class="text-gray-500 hover:underline">View All Orders &rarr;</a>
          </div>
        </div>

      </main>
    </div>

    <!-- 4. MAIN FOOTER -->
    <footer class="bg-white border-t border-gray-200 text-xs p-4 flex flex-col sm:flex-row justify-between items-center text-gray-500 gap-2">
      <div>
        <strong>Copyright &copy; 2026 <a href="#" class="text-[#3c8dbc]">AdminLTE.io</a>.</strong> All rights reserved.
      </div>
      <div>
        <b>Version</b> 2.4.2
      </div>
    </footer>

  </div>
</template>