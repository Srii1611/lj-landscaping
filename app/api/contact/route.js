// TODO: Implement contact form submission once Luis's company Gmail is confirmed.
// This route handler should:
//   1. Parse the incoming form fields (name, phone, email, address, services, days, time)
//   2. Send an email to Luis with a clickable Google Maps link for the property address
//   3. Return a JSON response with { ok: true } on success

export async function POST() {
  return Response.json({ ok: false, message: 'Not yet implemented.' }, { status: 501 });
}
