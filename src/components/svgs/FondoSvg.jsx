import './fondoSvg.css'

const FondoSvg = () => {
  return (
    <div className='inicioSvg'>
      <svg className='svgPlano' viewBox="0 0 3600 5600">
        <defs>
            <linearGradient  id="aspaNaranja" gradientTransform="rotate(100)">
                <stop offset="0%" stopColor="#00819E" stopOpacity="100%" />
                <stop offset="100%" stopColor="#0B182B" stopOpacity="100%" />
            </linearGradient>
            <linearGradient  id="aspaNaranja2" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="#000" stopOpacity="100%" />
                <stop offset="100%" stopColor="#fff" stopOpacity="100%" />
            </linearGradient>
            <clipPath id="rendimiento">
                <path d="M2814,567c-22.7-79-25.5-181.4-5.5-262C2869.3,68.4,2878.1,768.6,2814,567 M1448.4,268 c58.6,0,103.5,279.8-1.2,327.8C1446.6,591.9,1428.4,268,1448.4,268z M724.3,624.6c15.9,0,31.8-0.9,47.7-1.8 c11.6-1.2,16.2-5.2,16.2-16.2c-0.3-11.7-5.6-98.4,0.3-101.3c32.1,32.1,41.8,86.6,71,113.5c8.7,8.7,23.3,3.3,23.3-8.9 c0-5.8-64.9-116.6-72.5-124c3.1-1.2,4.6-2.1,6.1-2.4c85.1-25.3,80-232.8-24.8-245.5c-23.9-3.2-50.3-1.7-74.4-0.6 c-14.4,0.6-20.8,7.3-20.8,21.7c0,114.3,5.8,230.3,5.8,344.3C702.2,617.8,709.3,624.6,724.3,624.6z M784.6,450.7 c0-54.9-0.6-107.3-2.4-162.5c-0.1-6.9-3.4-22.3,5.5-22.3c66.4,0,87.1,192.2,8.3,192.2C790,457.7,784.6,458.7,784.6,450.7z M914.6,607.4c0.6,15.3,5.5,19.3,20.2,19.3c43.9,0,90.9-3.3,134.7-4.9c30,0,26.1-28.8,4.6-28.8l-70.4,3.4 c-12.8,0-4.8-83.4-6.1-101.3c0-16.8,31.2-11.6,41.6-9.2c18.2,2,21.2-22.6,5.5-27.9c-13-4-47.1,4.8-47.1-9.8 c0-57.5,0.3-119,1.5-176.3c0-11.5,68.4-4.6,85.4-7c13.5-3.4,14.6-21.2,1.5-26c-19.6-6.5-130.3-3.8-153.6-0.3 c-11.6,1.5-15.3,6.1-16.2,17.8C912.5,366.2,909.9,497.9,914.6,607.4z M1132.5,611.1c5.3,18,87.2,21,87.2-0.9 c-10.3-76.9-5.5-155-5.5-232.3c0-19.2,54.1,192.9,76.8,235.4c8.2,17.1,31.8,11.2,33.1-8.3c0-115.7-15.4-233.9-14.1-353.5 c-0.6-17.3-23.8-18.8-27.2-1.8c-18.7,81.1,19.2,210.4,5.2,271.2c-26.2-65.5-59.6-198-69.8-268.1c-3.1-23.7-91.2-24.6-91.2,1.5 C1127,318.4,1120.4,574.6,1132.5,611.1z M1363.9,598.8c3.7,31.2,37.3,23.8,65.8,25.1c156.6,0,137.8-379.4,14.4-385 c-20.8-0.6-41.3-1.8-62.1-1.8c-14.1,0.3-19.3,5.5-20.8,19C1349.7,347.6,1354.3,512.5,1363.9,598.8z M1575.4,261.3 c-2.3,117.7-2.7,225,3.4,343.7c1,27.3,77.7,27,79.9-0.3c3.8-113.4-3.7-233-3.7-347.4C1655,230.8,1576,223.2,1575.4,261.3z M1696.3,261.6c-0.4,100.8-5.8,250.6,6.4,348.6c3.4,25.5,84.8,19.3,84.8-4.9c-6.8-74.4-7.7-168.4-6.1-244.8 c0-13.6,31.3,90.5,38.3,112.6c8.4,27.2,25.5,23.1,32.7-4c6.7-30.8,15.9-87.3,28.5-114.8c2.5,4.9,10.2,218.9,11.6,245.1 c1.7,25.1,32,50.5,27.2-22.6c-7.8-106.9-8.9-214.5-8.9-321.7c-0.6-21.2-25.4-26.8-31.2-4.3c-5.3,18.3-44.1,166.1-47.4,168.3 c-17-38.9-37.3-121.7-45.6-165C1782.4,225.6,1697,229.1,1696.3,261.6z M1956.5,261.5c-2.3,117.7-2.7,225,3.4,343.7 c1,27.3,77.7,27,79.9-0.3c3.8-113.4-3.7-233-3.7-347.4C2036.1,231,1957.2,223.4,1956.5,261.5z M2079.1,607.4 c0.6,15.3,5.5,19.3,20.2,19.3c43.9,0,90.9-3.3,134.7-4.9c30,0,26.1-28.8,4.6-28.8l-70.4,3.4c-12.8,0-4.8-83.4-6.1-101.3 c0-16.8,31.2-11.6,41.6-9.2c18.2,2,21.2-22.6,5.5-27.9c-13-4-47.1,4.8-47.1-9.8c0-57.5,0.3-119,1.5-176.3c0-11.5,68.4-4.6,85.4-7 c13.5-3.4,14.6-21.2,1.5-26c-19.6-6.5-130.3-3.8-153.6-0.3c-11.6,1.5-15.3,6.1-16.2,17.8C2077,366.2,2074.3,497.9,2079.1,607.4z M2297.4,611.1c5.3,18,87.2,21,87.2-0.9c-10.3-76.9-5.5-155-5.5-232.3c0-19.2,54.1,192.9,76.8,235.4c8.2,17.1,31.8,11.2,33.1-8.3 c0-115.7-15.4-233.9-14.1-353.5c-0.6-17.3-23.8-18.8-27.2-1.8c-18.7,81.1,19.2,210.4,5.2,271.2c-26.2-65.5-59.6-198-69.8-268.1	c-3.1-23.7-91.2-24.6-91.2,1.5C2291.8,318.4,2285.2,574.6,2297.4,611.1z M2562.4,606.5c1.6,27.1,78.7,24.8,82,1.2 c5.7-107.8-13.5-215,0-331.8c2.1-16.3,21-9.8,37.6-9.8c16.4-0.7,19.6-22.4,3.1-26.9c-18.7-4.3-161.7-3.8-169.6-0.9 c-11.9,5.9-11.6,22.7,1.5,26c10.5,1.9,45.3-5.2,45.3,9.8C2562.4,392.8,2552.9,484.2,2562.4,606.5z M2757.7,612.3 c17.6,16.7,57.1,12.9,79.9,9.5c88.1-12.1,84.8-358.1,9.5-379.8c-23.5-6.9-47.6-5.1-71.6-3.1C2696.4,245,2709.1,565.2,2757.7,612.3z"/>
            </clipPath>
        </defs>
        <rect className='fondo' width="3600" height="5600"/>
        <g className='lineas'>
            <rect x="100" className="line" width="1" height="5600"/>
            <rect x="200" className="line" width="1" height="5600"/>
            <rect x="300" className="line" width="1" height="5600"/>
            <rect x="400" className="line" width="1" height="5600"/>
            <rect x="500" className="line" width="1" height="5600"/>
            <rect x="600" className="line" width="1" height="5600"/>
            <rect x="700" className="line" width="1" height="5600"/>
            <rect x="800" className="line" width="1" height="5600"/>
            <rect x="900" className="line" width="1" height="5600"/>
            <rect x="1000" className="line" width="1" height="5600"/>
            <rect x="1100" className="line" width="1" height="5600"/>
            <rect x="1200" className="line" width="1" height="5600"/>
            <rect x="1300" className="line" width="1" height="5600"/>
            <rect x="1400" className="line" width="1" height="5600"/>
            <rect x="1500" className="line" width="1" height="5600"/>
            <rect x="1600" className="line" width="1" height="5600"/>
            <rect x="1700" className="line" width="1" height="5600"/>
            <rect x="1800" className="line" width="1" height="5600"/>
            <rect x="1900" className="line" width="1" height="5600"/>
            <rect x="2000" className="line" width="1" height="5600"/>
            <rect x="2100" className="line" width="1" height="5600"/>
            <rect x="2200" className="line" width="1" height="5600"/>
            <rect x="2300" className="line" width="1" height="5600"/>
            <rect x="2400" className="line" width="1" height="5600"/>
            <rect x="2500" className="line" width="1" height="5600"/>
            <rect x="2600" className="line" width="1" height="5600"/>
            <rect x="2700" className="line" width="1" height="5600"/>
            <rect x="2800" className="line" width="1" height="5600"/>
            <rect x="2900" className="line" width="1" height="5600"/>
            <rect x="3000" className="line" width="1" height="5600"/>
            <rect x="3100" className="line" width="1" height="5600"/>
            <rect x="3200" className="line" width="1" height="5600"/>
            <rect x="3300" className="line" width="1" height="5600"/>
            <rect x="3400" className="line" width="1" height="5600"/>
            <rect x="3500" className="line" width="1" height="5600"/>

            <rect x="-1" y="100" className="line" width="3600" height="1"/>
            <rect x="-1" y="200" className="line" width="3600" height="1"/>
            <rect x="-1" y="300" className="line" width="3600" height="1"/>
            <rect x="-1" y="400" className="line" width="3600" height="1"/>
            <rect x="-1" y="500" className="line" width="3600" height="1"/>
            <rect x="-1" y="600" className="line" width="3600" height="1"/>
            <rect x="-1" y="700" className="line" width="3600" height="1"/>
            <rect x="-1" y="800" className="line" width="3600" height="1"/>
            <rect x="-1" y="900" className="line" width="3600" height="1"/>
            <rect x="-1" y="1000" className="line" width="3600" height="1"/>
            <rect x="-1" y="1100" className="line" width="3600" height="1"/>
            <rect x="-1" y="1200" className="line" width="3600" height="1"/>
            <rect x="-1" y="1300" className="line" width="3600" height="1"/>
            <rect x="-1" y="1400" className="line" width="3600" height="1"/>
            <rect x="-1" y="1500" className="line" width="3600" height="1"/>
            <rect x="-1" y="1600" className="line" width="3600" height="1"/>
            <rect x="-1" y="1700" className="line" width="3600" height="1"/>
            <rect x="-1" y="1800" className="line" width="3600" height="1"/>
            <rect x="-1" y="1900" className="line" width="3600" height="1"/>
            <rect x="-1" y="2000" className="line" width="3600" height="1"/>
            <rect x="-1" y="2100" className="line" width="3600" height="1"/>
            <rect x="-1" y="2200" className="line" width="3600" height="1"/>
            <rect x="-1" y="2300" className="line" width="3600" height="1"/>
            <rect x="-1" y="2400" className="line" width="3600" height="1"/>
            <rect x="-1" y="2500" className="line" width="3600" height="1"/>
            <rect x="-1" y="2600" className="line" width="3600" height="1"/>
            <rect x="-1" y="2700" className="line" width="3600" height="1"/>
            <rect x="-1" y="2800" className="line" width="3600" height="1"/>
            <rect x="-1" y="2900" className="line" width="3600" height="1"/>
            <rect x="-1" y="3000" className="line" width="3600" height="1"/>
            <rect x="-1" y="3100" className="line" width="3600" height="1"/>
            <rect x="-1" y="3200" className="line" width="3600" height="1"/>
            <rect x="-1" y="3300" className="line" width="3600" height="1"/>
            <rect x="-1" y="3400" className="line" width="3600" height="1"/>
            <rect x="-1" y="3500" className="line" width="3600" height="1"/>
            <rect x="-1" y="3600" className="line" width="3600" height="1"/>
            <rect x="-1" y="3700" className="line" width="3600" height="1"/>
            <rect x="-1" y="3800" className="line" width="3600" height="1"/>
            <rect x="-1" y="3900" className="line" width="3600" height="1"/>
            <rect x="-1" y="4000" className="line" width="3600" height="1"/>
            <rect x="-1" y="4100" className="line" width="3600" height="1"/>
            <rect x="-1" y="4200" className="line" width="3600" height="1"/>
            <rect x="-1" y="4300" className="line" width="3600" height="1"/>
            <rect x="-1" y="4400" className="line" width="3600" height="1"/>
            <rect x="-1" y="4500" className="line" width="3600" height="1"/>
            <rect x="-1" y="4600" className="line" width="3600" height="1"/>
            <rect x="-1" y="4700" className="line" width="3600" height="1"/>
            <rect x="-1" y="4800" className="line" width="3600" height="1"/>
            <rect x="-1" y="4900" className="line" width="3600" height="1"/>
            <rect x="-1" y="5000" className="line" width="3600" height="1"/>
            <rect x="-1" y="5100" className="line" width="3600" height="1"/>
            <rect x="-1" y="5200" className="line" width="3600" height="1"/>
            <rect x="-1" y="5300" className="line" width="3600" height="1"/>
            <rect x="-1" y="5400" className="line" width="3600" height="1"/>
            <rect x="-1" y="5500" className="line" width="3600" height="1"/>
        </g>
        <g className='recuadros'>
            <path className="recuadro" d="M200,100h-50c-27.6,0-50,22.4-50,50v2250"/>
            <path className="recuadro" d="M200,5500h-50c-27.6,0-50-22.4-50-50V3200"/>
            <path className="recuadro" d="M3400,100h50c27.6,0,50,22.4,50,50v2250"/>
            <path className="recuadro" d="M3400,5500h50c27.6,0,50-22.4,50-50V3200"/>
        </g>
        <g clipPath="url(#rendimiento)">
            <line className="r01" x1="752.3" y1="653.1" x2="744.9" y2="208.2"/>
            <path className="r02" d="M745.5,244.3c20-0.6,37.7,2.2,52.9,8.6c84.4,35.2,87.1,175.1,23.3,211.4c-16.7,9.5-42.5,16.5-71.2,19.8"/>
            <polyline className="r03" points="750.7,450.5 788.3,477.1 893.9,650.2 "/>

            <polyline className="e01" points="1115.1,248.9 960.9,255 956.9,609.1 1121.2,606 "/>
            <line className="e02" x1="904.1" y1="472.1" x2="1092.8" y2="472.1"/>

            <path className="n01" d="M1182.1,656.8L1169.9,255c54,79.6,94.8,249.5,139,350l-14.2-403.8"/>

            <line className="d01" x1="1412.1" y1="653.1" x2="1404.7" y2="208.2"/>
            <path className="d02" d="M1405.4,251c54.7-9.2,115.8,25.1,126.2,151.5c14.1,171.8-64.1,215.2-120.2,205.9"/>

            <line className="i01" x1="1620.6" y1="653.1" x2="1613.1" y2="208.2"/>

            <path className="m01" d="M1746,656.8L1733.8,255c50.6,45.7,69.6,104.6,103.4,206.9l57.9-208.5l12.9,388.4"/>

            <line className="i02" x1="2002.3" y1="653.1" x2="1994.8" y2="208.2"/>

            <polyline className="e03" points="2279.6,248.9 2125.4,255 2121.3,609.1 2285.7,606 "/>
            <line className="e04" x1="2068.6" y1="472.1" x2="2257.3" y2="472.1"/>

            <path className="n02" d="M2346.9,656.8L2334.7,255c54,79.6,94.8,249.5,139,350l-14.2-403.8"/>

            <line className="t01" x1="2609.2" y1="653.1" x2="2601.7" y2="208.2"/>
            <line className="t02" x1="2487.4" y1="251" x2="2717.3" y2="251"/>

            <path className="o01" d="M2795.7,248.6c-85.2,165.6-21.1,447,63.9,349.1c53.5-61.7,31.3-258.5-1.5-331.3 C2847,242,2821.4,241,2795.7,248.6z"/>
        </g>

      </svg>
    </div>
  )
}

export default FondoSvg
