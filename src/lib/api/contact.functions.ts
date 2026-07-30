import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getDbPool } from "../db.server";

const contactMessageSchema = z.object({
  name: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(255),
  org: z.string().trim().max(200).optional(),
  role: z.string().trim().max(160).optional(),
  message: z.string().trim().min(1).max(5000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator(contactMessageSchema)
  .handler(async ({ data }) => {
    const pool = getDbPool();

    const result = await pool.query<{ id: number }>(
      `
        insert into contact_messages (name, email, organization, role, message)
        values ($1, $2, $3, $4, $5)
        returning id
      `,
      [data.name, data.email, data.org || null, data.role || null, data.message],
    );

    return { ok: true, id: result.rows[0]?.id };
  });
