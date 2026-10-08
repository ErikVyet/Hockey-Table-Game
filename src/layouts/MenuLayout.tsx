import { Container } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import {  } from '@react-three/postprocessing';
import { Outlet } from 'react-router-dom';
import { Physics } from '@react-three/rapier';
import HockeyTable from '../components/common/HockeyTable';
import Striker from '../components/common/Striker';
import Puck from '../components/common/Puck';

export default function MenuLayout() {
    return (
        <Container className="relative min-h-screen max-h-max place-content-center place-items-center" maxWidth={false} disableGutters>
            <Canvas className="absolute! -z-10 top-0 left-0 size-full" camera={{ position: [-2, 1.5, 1.5], fov: 50 }} shadows>
                <ambientLight position={[1, 1, 1]} intensity={2}/>
                <Physics>
                    <HockeyTable/>
                    <Striker position={[0, 0.083, -0.71]} color={"blue"}/>
                    <Striker position={[0, 0.083, 0.71]} color={"red"}/>
                    <Puck initialPosition={[0, 0.5, 0]}/>
                </Physics>
            </Canvas>
            <Outlet/>
        </Container>
    );
}