import { z } from "zod";
import { Card } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateCardOrder } from "./shema";

export InputType = z.infer<typeof UpdateCardOrder>;
export ReturnType = ActionState<InputType, Card[]>;