// import MurallaCementix from "./MurallaCementix"
import "./murallaR.css"
import LogoM from "./LogoM"
import Mamposteria from "./Mamposteria"
import MezclaBlanca from "./MezclaBlanca"
import MurallaCementix from "./MurallaCementix"
import Rendimiento from "./Rendimiento"
import Metros from "./Metros"
import Dimension from "./Dimension"

const MurallaR = () => {
  return (
    <div className="muralla">
        <svg viewBox="0 0 5600 5600" className="fondoIniM">
        <defs>
            <linearGradient  id="fondoM2" gradientTransform="rotate(40)">
                <stop offset="0%" stopColor="#00A3C6" stopOpacity="100%" />
                <stop offset="100%" stopColor="#0B182B" stopOpacity="100%" />
            </linearGradient>
            <linearGradient  id="fondoM" gradientTransform="rotate(40)">
            <stop offset="0%" stopColor="#0B182B" stopOpacity="100%" />
            <stop offset="100%" stopColor="#00A3C6" stopOpacity="100%" />
            </linearGradient>
        </defs>
            <rect width="5600" height="5600" 
            fill="url(#fondoM2)" 
            // fill="gray" 
            > </rect>
            <g className="lineasMsWidth">
                <rect x="100" className="lineMH" width="5" height="5600"/>
                <rect x="200" className="lineMH" width="5" height="5600"/>
                <rect x="300" className="lineMH" width="5" height="5600"/>
                <rect x="400" className="lineMH" width="5" height="5600"/>
                <rect x="500" className="lineMH" width="5" height="5600"/>
                <rect x="600" className="lineMH" width="5" height="5600"/>
                <rect x="700" className="lineMH" width="5" height="5600"/>
                <rect x="800" className="lineMH" width="5" height="5600"/>
                <rect x="900" className="lineMH" width="5" height="5600"/>
                <rect x="1000" className="lineMH" width="5" height="5600"/>

                <rect x="1100" className="lineMH" width="5" height="5600"/>
                <rect x="1200" className="lineMH" width="5" height="5600"/>
                <rect x="1300" className="lineMH" width="5" height="5600"/>
                <rect x="1400" className="lineMH" width="5" height="5600"/>
                <rect x="1500" className="lineMH" width="5" height="5600"/>
                <rect x="1600" className="lineMH" width="5" height="5600"/>
                <rect x="1700" className="lineMH" width="5" height="5600"/>
                <rect x="1800" className="lineMH" width="5" height="5600"/>
                <rect x="1900" className="lineMH" width="5" height="5600"/>
                <rect x="2000" className="lineMH" width="5" height="5600"/>

                <rect x="2100" className="lineMH" width="5" height="5600"/>
                <rect x="2200" className="lineMH" width="5" height="5600"/>
                <rect x="2300" className="lineMH" width="5" height="5600"/>
                <rect x="2400" className="lineMH" width="5" height="5600"/>
                <rect x="2500" className="lineMH" width="5" height="5600"/>
                <rect x="2600" className="lineMH" width="5" height="5600"/>
                <rect x="2700" className="lineMH" width="5" height="5600"/>
                <rect x="2800" className="lineMH" width="5" height="5600"/>
                <rect x="2900" className="lineMH" width="5" height="5600"/>
                <rect x="3000" className="lineMH" width="5" height="5600"/>

                <rect x="3100" className="lineMH" width="5" height="5600"/>
                <rect x="3200" className="lineMH" width="5" height="5600"/>
                <rect x="3300" className="lineMH" width="5" height="5600"/>
                <rect x="3400" className="lineMH" width="5" height="5600"/>
                <rect x="3500" className="lineMH" width="5" height="5600"/>
                <rect x="3600" className="lineMH" width="5" height="5600"/>
                <rect x="3700" className="lineMH" width="5" height="5600"/>
                <rect x="3800" className="lineMH" width="5" height="5600"/>
                <rect x="3900" className="lineMH" width="5" height="5600"/>
                <rect x="4000" className="lineMH" width="5" height="5600"/>

                <rect x="4100" className="lineMH" width="5" height="5600"/>
                <rect x="4200" className="lineMH" width="5" height="5600"/>
                <rect x="4300" className="lineMH" width="5" height="5600"/>
                <rect x="4400" className="lineMH" width="5" height="5600"/>
                <rect x="4500" className="lineMH" width="5" height="5600"/>
                <rect x="4600" className="lineMH" width="5" height="5600"/>
                <rect x="4700" className="lineMH" width="5" height="5600"/>
                <rect x="4800" className="lineMH" width="5" height="5600"/>
                <rect x="4900" className="lineMH" width="5" height="5600"/>
                <rect x="5000" className="lineMH" width="5" height="5600"/>

                <rect x="5100" className="lineMH" width="5" height="5600"/>
                <rect x="5200" className="lineMH" width="5" height="5600"/>
                <rect x="5300" className="lineMH" width="5" height="5600"/>
                <rect x="5400" className="lineMH" width="5" height="5600"/>
                <rect x="5500" className="lineMH" width="5" height="5600"/>
            </g>
            <g className="lineasMsHeight">
                <rect y="100" className="lineM" height="5" width="5600"/>
                <rect y="200" className="lineM" height="5" width="5600"/>
                <rect y="300" className="lineM" height="5" width="5600"/>
                <rect y="400" className="lineM" height="5" width="5600"/>
                <rect y="500" className="lineM" height="5" width="5600"/>
                <rect y="600" className="lineM" height="5" width="5600"/>
                <rect y="700" className="lineM" height="5" width="5600"/>
                <rect y="800" className="lineM" height="5" width="5600"/>
                <rect y="900" className="lineM" height="5" width="5600"/>
                <rect y="1000" className="lineM" height="5" width="5600"/>

                <rect y="1100" className="lineM" height="5" width="5600"/>
                <rect y="1200" className="lineM" height="5" width="5600"/>
                <rect y="1300" className="lineM" height="5" width="5600"/>
                <rect y="1400" className="lineM" height="5" width="5600"/>
                <rect y="1500" className="lineM" height="5" width="5600"/>
                <rect y="1600" className="lineM" height="5" width="5600"/>
                <rect y="1700" className="lineM" height="5" width="5600"/>
                <rect y="1800" className="lineM" height="5" width="5600"/>
                <rect y="1900" className="lineM" height="5" width="5600"/>
                <rect y="2000" className="lineM" height="5" width="5600"/>

                <rect y="2100" className="lineM" height="5" width="5600"/>
                <rect y="2200" className="lineM" height="5" width="5600"/>
                <rect y="2300" className="lineM" height="5" width="5600"/>
                <rect y="2400" className="lineM" height="5" width="5600"/>
                <rect y="2500" className="lineM" height="5" width="5600"/>
                <rect y="2600" className="lineM" height="5" width="5600"/>
                <rect y="2700" className="lineM" height="5" width="5600"/>
                <rect y="2800" className="lineM" height="5" width="5600"/>
                <rect y="2900" className="lineM" height="5" width="5600"/>
                <rect y="3000" className="lineM" height="5" width="5600"/>

                <rect y="3100" className="lineM" height="5" width="5600"/>
                <rect y="3200" className="lineM" height="5" width="5600"/>
                <rect y="3300" className="lineM" height="5" width="5600"/>
                <rect y="3400" className="lineM" height="5" width="5600"/>
                <rect y="3500" className="lineM" height="5" width="5600"/>
                <rect y="3600" className="lineM" height="5" width="5600"/>
                <rect y="3700" className="lineM" height="5" width="5600"/>
                <rect y="3800" className="lineM" height="5" width="5600"/>
                <rect y="3900" className="lineM" height="5" width="5600"/>
                <rect y="4000" className="lineM" height="5" width="5600"/>

                <rect y="4100" className="lineM" height="5" width="5600"/>
                <rect y="4200" className="lineM" height="5" width="5600"/>
                <rect y="4300" className="lineM" height="5" width="5600"/>
                <rect y="4400" className="lineM" height="5" width="5600"/>
                <rect y="4500" className="lineM" height="5" width="5600"/>
                <rect y="4600" className="lineM" height="5" width="5600"/>
                <rect y="4700" className="lineM" height="5" width="5600"/>
                <rect y="4800" className="lineM" height="5" width="5600"/>
                <rect y="4900" className="lineM" height="5" width="5600"/>
                <rect y="5000" className="lineM" height="5" width="5600"/>

                <rect y="5100" className="lineM" height="5" width="5600"/>
                <rect y="5200" className="lineM" height="5" width="5600"/>
                <rect y="5300" className="lineM" height="5" width="5600"/>
                <rect y="5400" className="lineM" height="5" width="5600"/>
                <rect y="5500" className="lineM" height="5" width="5600"/>
            </g>
            <LogoM/>
            <MezclaBlanca/>
            {/* <Rendimiento/> */}
            <Mamposteria/>
            <MurallaCementix/>
            <Metros/>
            {/* <Dimension/> */}
        </svg>
    </div>
  )
}

export default MurallaR
