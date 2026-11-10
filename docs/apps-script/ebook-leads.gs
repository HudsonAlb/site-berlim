/**
 * Recebe os cadastros do ebook MARTECH (https://www.berlim.co/ebookmartech)
 * e grava uma linha por lead na planilha onde este script está.
 *
 * Como publicar:
 * 1. Crie uma planilha no Google Sheets (ex.: "Leads - Ebook MARTECH").
 * 2. Extensões > Apps Script, cole este arquivo e salve.
 * 3. Implantar > Nova implantação > Tipo: App da Web
 *    - Executar como: Eu
 *    - Quem pode acessar: Qualquer pessoa
 * 4. Copie a URL que termina em /exec e cole em EBOOK_LEADS_WEBHOOK_URL,
 *    no arquivo src/components/ebook/EbookGate.tsx.
 *
 * O site envia: Data/Hora, Nome, Telefone, E-mail, Consentimento LGPD e Origem
 * (Origem = "qrcode" para quem chega pelo QR code, "direto" para o resto).
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);

    // Cria o cabeçalho na primeira vez e acrescenta colunas novas se o site passar a enviar mais campos.
    var lastCol = sheet.getLastColumn();
    var headers = lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0] : [];
    Object.keys(data).forEach(function (key) {
      if (headers.indexOf(key) === -1) headers.push(key);
    });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);

    var row = headers.map(function (h) {
      return data[h] !== undefined ? data[h] : '';
    });
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
