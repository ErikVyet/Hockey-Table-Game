import { RigidBody } from "@react-three/rapier";
import { ModelPath } from "../../enums/ModelPath";
import useModel from "../../hooks/useModel";
import { amber } from "@mui/material/colors";
import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
import { PUCK_MESH_NAME } from "../../constants/model";
import type { Mesh } from "three";

type PuckProps = {
    initialPosition: [x: number, y: number, z: number]
}

export default function Puck({ initialPosition }: PuckProps) {
    const { nodes } = useModel(ModelPath.AIR_HOCKEY_PUCK);

    return (
        <RigidBody type={"dynamic"} colliders={"hull"} activeCollisionTypes={ActiveCollisionTypes.ALL} ccd>
            <mesh geometry={(nodes[PUCK_MESH_NAME] as Mesh).geometry} position={initialPosition} rotation={[Math.PI / 2, 0, 0]} scale={0.06} castShadow receiveShadow>
                <meshStandardMaterial color={amber[500]} roughness={0.5} metalness={0.4} />
            </mesh>
        </RigidBody>
    );
}