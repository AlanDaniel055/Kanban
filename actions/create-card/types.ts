import { z } from "zod";
import { Card } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateCard } from "./shema";

export InputType = z.infer<typeof CreateCard>;
export ReturnType = ActionState<InputType, Card>;