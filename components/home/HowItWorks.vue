<template>
  <div title="How it works" class="py-5 how-it-works">
    <div class="container">
      <div class="row mt-2 align-items-center justify-content-center">
        <div class="col-md-4">
          <p class="mb-2 mt-3 fst-italic h5 text-sm-start text-center">
            Request a free quote
          </p>
          <p class="h2 fw-bolder my-0 text-sm-start text-center">
            How It Works
          </p>
          <p class="mt-2 text-sm-start text-center h5">
            in <span class="fst-italic">3 Simple Steps</span>
          </p>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4 text-center position-relative mt-3">
              <img height="120" src="@/assets/images/step1.png" />
              <p class="mt-3 mb-0 fw-bold h5">Select Your <br />Package</p>
              <p class="mt-2">& Choose your <br />prefered options.</p>
            </div>
            <div class="col-md-4 text-center position-relative mt-3">
              <img height="120" src="@/assets/images/step2.svg" />
              <p class="mt-3 mb-0 fw-bold h5">Get A <br />Free Quote</p>
              <p class="mt-2">& Fill your <br />email and name</p>
            </div>
            <div class="col-md-4 text-center position-relative mt-3">
              <img height="120" src="@/assets/images/step3.svg" />
              <p class="mt-3 mb-0 fw-bold h5">
                Sending To <br />3 Tour Operators
              </p>
              <p class="mt-2">This ensure you <br />get the best deal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss" scoped>
span {
  color: #5e0302;
  font-weight: 500;
}

p {
  font-weight: 400;
}

svg {
  position: absolute;
  right: -10px;
  top: 30%;
  fill: #5e0302;
}

.how-it-works {
  background-color: #20161612;
}
</style>