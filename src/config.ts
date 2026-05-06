/**
 * Apps Script webhook URL.
 *
 * How to get your URL:
 *   1. Open Google Sheets → Extensions → Apps Script
 *   2. Paste the script from GOOGLE_SHEETS_SETUP.md
 *   3. Deploy → New deployment → Web App → Execute as: Me → Who has access: Anyone
 *   4. Copy the Web App URL and paste it below (or set VITE_APPS_SCRIPT_URL in .env)
 *
 * On Vercel: add VITE_APPS_SCRIPT_URL as an environment variable in the project settings.
 */
export const APPS_SCRIPT_URL =
  import.meta.env.VITE_APPS_SCRIPT_URL ?? "COLOQUE_AQUI_O_URL_DO_APPS_SCRIPT";

/** WhatsApp number (without + or spaces) */
export const WHATSAPP_NUMBER = "5519999338747";
