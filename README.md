# 2026 沖繩自駕行程

旅遊日期：2026/10/6–10/12

## 專案內容

- `index.html`：手機版行程主頁，無需建置工具即可開啟。
- `assets/original-itinerary.png`：最初提供的景點安排圖片。
- `assets/okinawa-itinerary-map.png`：依照 1A–5C 景點重新製作的手機版全覽地圖。

## 本機開啟

可直接用瀏覽器開啟 `index.html`。若要模擬正式網站環境：

```bash
python3 -m http.server 8080
```

接著瀏覽 `http://localhost:8080`。

## 部署架構

`index.html` 仍是唯一的網站內容來源，不需要 React 或編譯才能開啟。部署相關檔案只負責讓 OpenAI Sites 接受並執行這個靜態網站：

- `prepare:static` 在建置前將 `index.html` 與 `assets/` 複製到暫存的 `public/`。
- `worker/index.ts` 直接在網站根網址提供靜態 `index.html`，不經過頁面重新實作。
- `app/`、`vite.config.ts` 與 `.openai/hosting.json` 是 Sites 的部署轉接層，不承載行程內容。
- `public/index.html`、`public/assets/` 與 `dist/` 都是可重新產生的建置輸出，不納入版本控制。

部署前驗證：

```bash
npm ci
npm run verify:static
npm run build
```

本機檢查正式建置：

```bash
npm run start
```

## 使用限制

- 行程內容、日期切換與介面本身不依賴外部套件。
- Google Maps、景點官網及電話功能需由對應裝置支援，地圖與官網需要網路。
- 勾選清單與旅行備忘儲存在瀏覽器的 `localStorage`；清除網站資料後會消失。
- 景點營業時間與交通狀況應在出發前再次確認。
