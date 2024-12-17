import "./murallaCementix.css"

const MurallaCementix = () => {
  return (
    <svg y="700" x="200" viewBox='0 0 5600 5600'>
        <defs>
          <clipPath id="cementoA">
            <polygon className="cementoA" points="4771.2,3726.1 4771.2,3788.3 4949.1,3889.6 5038.1,3839.3 5038.1,3860.3 4949.1,3910.6 3803.3,3258.4 3803.3,3237.4 3981.1,3338.7 3981.1,3276.4 4070.3,3226.1 4085.9,3234.9 3996.8,3285.4 3996.8,3347.6 4174.7,3448.9 4174.7,3386.6 4263.9,3336.3 4279.5,3345.1 4190.4,3395.6 4190.4,3457.8 4368.3,3559 4368.3,3496.8 4457.5,3446.5 4473.1,3455.3 4384,3505.8 4384,3568 4561.9,3669.2 4561.9,3607 4651.1,3556.7 4666.6,3565.5 4577.6,3615.9 4577.6,3678.2 4755.5,3779.4 4755.5,3717.2 4844.7,3666.9 4860.2,3675.7 "/>
          </clipPath>
          <clipPath id="cementoB">
            <polygon className="cementoB" points="4861.3,3694.1 4861.3,3756.4 4949.1,3806.4 5036.9,3755.4 5036.9,3776.4 4949.1,3827.4 3802.9,3174.2 3803,3153.1 3890.7,3203.1 3890.7,3140.9 3978.8,3089.8 3994.1,3098.6 3906.2,3149.7 3906.2,3212 4081.8,3312 4081.8,3249.7 4169.8,3198.7 4185.1,3207.5 4097.2,3258.6 4097.2,3320.8 4272.8,3420.9 4272.8,3358.6 4360.8,3307.6 4376.1,3316.4 4288.3,3367.5 4288.3,3429.7 4463.8,3529.8 4463.8,3467.5 4551.8,3416.5 4567.1,3425.2 4479.3,3476.4 4479.3,3538.6 4654.8,3638.7 4654.8,3576.4 4742.8,3525.4 4758.1,3534.1 4670.3,3585.2 4670.3,3647.5 4845.8,3747.6 4845.8,3685.3 4933.8,3634.3 4949.2,3643 "/>
          </clipPath>
          <g id="laA">
            <g className="ladrilloA6">
              <polygon className="ladrilloLateral" points="3981.1,3276.4 4070.2,3226 4070.2,3288.4 3981.1,3338.6 "/>
              <polygon className="ladrilloSuperior" points="3892.5,3124.8 4070.2,3226 3981.1,3276.4 3803.3,3175.2 "/>
              <polygon className="ladrilloFrente" points="3803.3,3175.2 3981.1,3276.4 3981.1,3338.6 3803.3,3237.4 "/>
            </g>
            <g className="ladrilloA5">
              <polygon className="ladrilloLateral" points="4174.7,3386.6 4263.8,3336.2 4263.8,3398.6 4174.7,3448.8 "/>
              <polygon className="ladrilloSuperior" points="4086,3235 4263.8,3336.2 4174.7,3386.6 3996.8,3285.4 "/>
              <polygon className="ladrilloFrente" points="3996.8,3285.4 4174.7,3386.6 4174.7,3448.8 3996.8,3347.6 "/>
            </g>
            <g className="ladrilloA4">
              <polygon className="ladrilloLateral" points="4368.3,3496.8 4457.4,3446.4 4457.4,3508.8 4368.3,3559 "/>
              <polygon className="ladrilloSuperior" points="4279.6,3345.2 4457.4,3446.4 4368.3,3496.8 4190.4,3395.6 "/>
              <polygon className="ladrilloFrente" points="4190.4,3395.6 4368.3,3496.8 4368.3,3559 4190.4,3457.8 "/>
            </g>
            <g className="ladrilloA3">
              <polygon className="ladrilloLateral" points="4561.9,3607 4650.9,3556.6 4650.9,3619 4561.9,3669.2 "/>
              <polygon className="ladrilloSuperior" points="4473.2,3455.4 4650.9,3556.6 4561.9,3607 4384,3505.8 "/>
              <polygon className="ladrilloFrente" points="4384,3505.8 4561.9,3607 4561.9,3669.2 4384,3568 "/>
            </g>
            <g className="ladrilloA2">
              <polygon className="ladrilloLateral" points="4755.5,3717.2 4844.5,3666.8 4844.5,3729.1 4755.5,3779.4 "/>
              <polygon className="ladrilloSuperior" points="4666.8,3565.6 4844.5,3666.8 4755.5,3717.2 4577.6,3615.9 "/>
              <polygon className="ladrilloFrente" points="4577.6,3615.9 4755.5,3717.2 4755.5,3779.4 4577.6,3678.2 "/>
            </g>
            <g className="ladrilloA1">
              <polygon className="ladrilloFrente" points="4771.2,3726.1 4949.1,3827.4 4949.1,3889.6 4771.2,3788.3 "/>
              <polygon className="ladrilloSuperior" points="4860.4,3675.8 5038.1,3777 4949.1,3827.4 4771.2,3726.1 "/>
              <polygon className="ladrilloLateral" points="4949.1,3827.4 5038.1,3777 5038.1,3839.3 4949.1,3889.6 "/>
            </g>
            <g clipPath="url(#cementoA)">
              <polyline className=" lineaAs line1A" points="4763.7,3794 4950.4,3900.1 5054.6,3839.5 "/>
              <polyline className=" lineaAs line2A" points="4569.7,3683.8 4763.7,3794 4763.8,3721.5 4867.3,3661.2 "/>
              <polyline className=" lineaAs line3A" points="4375.6,3573.6 4569.7,3683.8 4569.8,3611.3 4673.3,3551 "/>
              <polyline className=" lineaAs line4A" points="4182,3463.6 4376,3573.8 4376.1,3501.3 4479.6,3441 "/>
              <polyline className=" lineaAs line5A" points="3988.5,3353.7 4182.6,3463.9 4182.7,3391.4 4286.2,3331.1 "/>
              <polyline className=" lineaAs line6A" points="3794.7,3243.6 3988.8,3353.8 3988.9,3281.3 4092.4,3221 "/>
            </g>
          </g>
          <g id="laB">
            <g className="ladrilloA13">
              <polygon className="ladrilloLateral" points="3890.7,3140.9 3978.6,3089.7 3978.6,3152.2 3890.7,3203.1 	"/>
              <polygon className="ladrilloSuperior" points="3891,3039.8 3978.6,3089.7 3890.7,3140.9 3803,3090.9 	"/>
              <polygon className="ladrilloFrente" points="3803,3090.9 3890.7,3140.9 3890.7,3203.1 3803,3153.1 	"/>
            </g>
            <g className="ladrilloA12">
              <polygon className="ladrilloLateral" points="4081.8,3249.7 4169.6,3198.6 4169.6,3261.1 4081.8,3312 	"/>
              <polygon className="ladrilloSuperior" points="3994.3,3098.7 4169.6,3198.6 4081.8,3249.7 3906.2,3149.7 	"/>
              <polygon className="ladrilloFrente" points="3906.2,3149.7 4081.8,3249.7 4081.8,3312 3906.2,3212 	"/>
            </g>
            <g className="ladrilloA11">
              <polygon className="ladrilloLateral" points="4272.8,3358.6 4360.6,3307.5 4360.6,3369.9 4272.8,3420.9 	"/>
              <polygon className="ladrilloSuperior" points="4185.3,3207.5 4360.6,3307.5 4272.8,3358.6 4097.2,3258.6 	"/>
              <polygon className="ladrilloFrente" points="4097.2,3258.6 4272.8,3358.6 4272.8,3420.9 4097.2,3320.8 	"/>
            </g>
            <g className="ladrilloA10">
              <polygon className="ladrilloLateral" points="4463.8,3467.5 4551.6,3416.4 4551.6,3478.8 4463.8,3529.8 	"/>
              <polygon className="ladrilloSuperior" points="4376.3,3316.4 4551.6,3416.4 4463.8,3467.5 4288.3,3367.5 	"/>
              <polygon className="ladrilloFrente" points="4288.3,3367.5 4463.8,3467.5 4463.8,3529.8 4288.3,3429.7 	"/>
            </g>
            <g className="ladrilloA09">
              <polygon className="ladrilloLateral" points="4654.8,3576.4 4742.7,3525.3 4742.7,3587.7 4654.8,3638.7 	"/>
              <polygon className="ladrilloSuperior" points="4567.3,3425.3 4742.7,3525.3 4654.8,3576.4 4479.3,3476.4 	"/>
              <polygon className="ladrilloFrente" points="4479.3,3476.4 4654.8,3576.4 4654.8,3638.7 4479.3,3538.6 	"/>
            </g>
            <g className="ladrilloA08">
              <polygon className="ladrilloLateral" points="4845.8,3685.3 4933.7,3634.2 4933.7,3696.6 4845.8,3747.6 	"/>
              <polygon className="ladrilloSuperior" points="4758.3,3534.2 4933.7,3634.2 4845.8,3685.3 4670.3,3585.2 	"/>
              <polygon className="ladrilloFrente" points="4670.3,3585.2 4845.8,3685.3 4845.8,3747.6 4670.3,3647.5 	"/>
            </g>
            <g className="ladrilloA07">
              <polygon className="ladrilloLateral" points="4949.1,3744.1 5036.9,3693 5036.9,3755.4 4949.1,3806.4 	"/>
              <polygon className="ladrilloSuperior" points="4949.3,3643.1 5036.9,3693 4949.1,3744.1 4861.3,3694.1 	"/>
              <polygon className="ladrilloFrente" points="4861.3,3694.1 4949.1,3744.1 4949.1,3806.4 4861.3,3756.4 	"/>
            </g>
            <g clipPath="url(#cementoB)">
              <polyline className="lineaBs line07A" points="5053.3,3756.7 4949.1,3817.3 4853.2,3762 	"/>
              <polyline className="lineaBs line08A" points="4659.1,3651.8 4853.2,3762 4853.3,3689.5 4956.8,3629.2 	"/>
              <polyline className="lineaBs line09A" points="4467.9,3542.8 4662,3653 4662.1,3580.5 4765.6,3520.2 	"/>
              <polyline className="lineaBs line10A" points="4277.6,3434.3 4471.6,3544.5 4471.7,3472 4575.2,3411.7 	"/>
              <polyline className="lineaBs line11A" points="4087.2,3325.8 4281.2,3436 4281.3,3363.5 4384.8,3303.2 	"/>
              <polyline className="lineaBs line12A" points="3894.9,3216.2 4089,3326.4 4089.1,3253.9 4192.6,3193.6 	"/>
              <polyline className="lineaBs line13A" points="3787.4,3154.7 3898,3217.6 3898.1,3145.1 4001.6,3084.8 	"/>
            </g>
          </g>
        </defs>
        <use href="#laA"/>
        <use href="#laB"/>
        <use href="#laA" y="-150"/>
        <use href="#laB" y="-150"/>
        <use href="#laA" y="-300"/>
        <use href="#laB" y="-300"/>
        <use href="#laA" y="-450"/>
        <use href="#laB" y="-450"/>
        <use href="#laA" y="-600"/>
        <use href="#laB" y="-600"/>
        <use href="#laA" y="-750"/>
        <use href="#laB" y="-750"/>
        <use href="#laA" y="-900"/>
        <use href="#laB" y="-900"/>
        <use href="#laA" y="-1050"/>
        <use href="#laB" y="-1050"/>
        <use href="#laA" y="-1200"/>
        <use href="#laB" y="-1200"/>
    </svg>
  )
}

export default MurallaCementix
