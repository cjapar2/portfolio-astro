import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async () => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["cjapar2@gmail.com"],
    subject: "it works!",
    html: "<p>hello world<p>",
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify({ success: true}));
}