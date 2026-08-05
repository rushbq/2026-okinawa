# 2026 沖繩自駕行程

旅遊日期：2026/10/6–10/12

## 專案內容

- `index.html`：手機版行程主頁，無需建置工具即可開啟。
- `assets/original-itinerary.png`：最初提供的景點安排圖片。
- `assets/okinawa-itinerary-map.png`：依照 1A–5C 景點重新製作的手機版全覽地圖。

## 本機開啟

可直接用瀏覽器開啟 `index.html`。若要模擬正式網站環境：

```bash
cd /Users/clyde/dev/playground/2026沖繩
python3 -m http.server 8080
```

接著瀏覽 `http://localhost:8080`。

## 使用限制

- 行程內容、日期切換與介面本身不依賴外部套件。
- Google Maps、景點官網及電話功能需由對應裝置支援，地圖與官網需要網路。
- 勾選清單與旅行備忘儲存在瀏覽器的 `localStorage`；清除網站資料後會消失。
- 景點營業時間與交通狀況應在出發前再次確認。
