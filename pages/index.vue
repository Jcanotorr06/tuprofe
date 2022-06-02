<template>
  <div class="p-5">
    <div class="surface w-100 rounded-lg relative">
      <div class="w-100 surface shadow-lg rounded-lg px-32 py-5 flex justify-between items-center flex-wrap">
          <div class="flex h-100 items-center grow">
              <div class="bg-gray-400 flex justify-center items-center p-3 rounded-lg text-white">
                  <b-icon icon="book-half"/>
              </div>
              <div class="ml-3">
                  <div>
                    <h1 class="text-sm font-bold">{{$t ("amount_1")}}</h1>
                  </div>
                  <div>
                    <p class="text-xs">{{$t ("amount_desc_1")}}</p>
                  </div>
              </div>
          </div>
          <div class="flex h-100 items-center grow">
              <div class="bg-gray-400 flex justify-center items-center p-3 rounded-lg text-white">
                  <b-icon icon="book-half"/>
              </div>
              <div class="ml-3">
                  <div>
                    <h1 class="text-sm font-bold">{{$t ("amount_2")}}</h1>
                  </div>
                  <div>
                    <p class="text-xs">{{$t ("amount_desc_2")}}</p>
                  </div>
              </div>
          </div>
          <div class="grow-2 flex flex-col justify-center max-w-[50%]">
            <div>
              <h1 class="text-sm font-bold">{{$t ("welcome")}}</h1>
            </div>
            <div>
              <p class="text-xs">{{$t ("welcome_msg")}}</p>
            </div>
          </div>
      </div>
      <div>
        <div class="h-96"></div>
      </div>
    </div>
  </div>
</template>
