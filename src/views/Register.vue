<template>
  <div class="container mx-auto rounded-[10px] bg-white flex justify-between p-[40px] gap-x-[200px]">
    <img src="../assets/images/register-icon.png" alt="">
    <div class="flex w-full flex-col gap-y-[21px]">
      <h2 class="text-[36px] text-[#212427] font-bold">Sign up</h2>
      <input type="text" class="w-full border-[1px] border-[#565454] rounded-[8px] p-[16px] pl-[70px] placeholder-[999999] outline-none bg-no-repeat bg-[22px 22px]" placeholder="Enter first name" :style="{'background-image': 'url('+ require('../assets/images/icons/icon-park-solid_edit-name.svg') + ')', 'background-position': '20px'}">
      <input type="text" class="w-full border-[1px] border-[#565454] rounded-[8px] p-[16px] pl-[70px] placeholder-[999999] outline-none bg-no-repeat bg-[22px 22px]" placeholder="Enter first name" :style="{'background-image': 'url('+ require('../assets/images/icons/icon-park-outline_edit-name.svg') + ')', 'background-position': '20px'}">
      <input type="text" class="w-full border-[1px] border-[#565454] rounded-[8px] p-[16px] pl-[70px] placeholder-[999999] outline-none bg-no-repeat bg-[22px 22px]" placeholder="Enter first name" :style="{'background-image': 'url('+ require('../assets/images/icons/mdi_user.svg') + ')', 'background-position': '20px'}">
      <input type="text" class="w-full border-[1px] border-[#565454] rounded-[8px] p-[16px] pl-[70px] placeholder-[999999] outline-none bg-no-repeat bg-[22px 22px]" placeholder="Enter first name" :style="{'background-image': 'url('+ require('../assets/images/icons/ic_baseline-email.svg') + ')', 'background-position': '20px'}">
      <input type="text" class="w-full border-[1px] border-[#565454] rounded-[8px] p-[16px] pl-[70px] placeholder-[999999] outline-none bg-no-repeat bg-[22px 22px]" placeholder="Enter first name" :style="{'background-image': 'url('+ require('../assets/images/icons/mdi_password.svg') + ')', 'background-position': '20px'}">
      <input type="text" class="w-full border-[1px] border-[#565454] rounded-[8px] p-[16px] pl-[70px] placeholder-[999999] outline-none bg-no-repeat bg-[22px 22px]" placeholder="Enter first name" :style="{'background-image': 'url('+ require('../assets/images/icons/mdi_password-outline.svg') + ')', 'background-position': '20px'}">
      <div class="inline-flex items-center">
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#565454] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="checkbox" checked />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
        <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
          I agree to all terms
        </label>
      </div>
      <button class="text-[#F8F9FB] py-[20px] px-[30px] bg-[#3256aa] rounded-[5px] hover:opacity-80 transition-opacity" > Register</button>
    </div>
  </div>
</template>