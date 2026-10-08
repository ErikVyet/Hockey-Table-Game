import { Button, Stack, Typography } from "@mui/material";
import { FONT_FAMILY, TEXT_COLOR } from "../constants/style";
import { blue, green, yellow } from "@mui/material/colors";

export default function MenuPage() {

    return (
        <Stack className="w-sm h-screen justify-center items-center lg:place-self-start" spacing={12}>
            <Typography className={`${FONT_FAMILY} ${TEXT_COLOR} text-4xl!`}>Air Hockey</Typography>
            <Stack className="" spacing={4}>
                <Button className="px-10! py-2.5! font-orbitron! text-2xl! bg-blue-500!" variant={"contained"} sx={{ boxShadow: `-6px 6px 0 ${blue[300]}` }} disableRipple>Host</Button>
                <Button className="px-10! py-2.5! font-orbitron! text-2xl! bg-green-500!" variant={"contained"} sx={{ boxShadow: `-6px 6px 0 ${green[300]}` }} disableRipple>Join</Button>
                <Button className="px-10! py-2.5! font-orbitron! text-2xl! bg-yellow-500!" variant={"contained"} sx={{ boxShadow: `-6px 6px 0 ${yellow[300]}` }} disableRipple>Setting</Button>
            </Stack>
        </Stack>
    );
}