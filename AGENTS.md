# 專案維護規範

## 專案定位

- 本專案是純靜態網站。
- `index.html` 是唯一的網站入口與主要內容來源。
- `assets/` 存放圖片等靜態資源。
- 不需要 Node.js、npm、React、Next.js、Vinext、Vite、Worker 或其他建置框架。
- 除非使用者明確要求改變架構，否則不得新增套件管理、編譯流程或伺服器端執行環境。

## 部署規則

- 使用者說 `deploy`、部署、發布或更新網站時，一律視為部署到既有 GitHub Pages。
- Git repository：`https://github.com/rushbq/2026-okinawa.git`
- Git remote：`origin`
- 發布來源：`main` 分支根目錄 `/`
- 公開網址：`https://rushbq.github.io/2026-okinawa/`
- 正常流程是驗證靜態檔案、提交變更，然後 `git push origin main`。
- 推送 `main` 後，應確認 GitHub Pages 最新 build 狀態為 `built`，並檢查公開網址回傳 HTTP 200。
- 除非使用者明確指定，禁止改用 OpenAI Sites、Vercel、Cloudflare Pages、Netlify 或其他託管服務。

## 靜態網站注意事項

- 必須保留根目錄的 `.nojekyll`，避免 GitHub Pages 使用 Jekyll 處理檔案。
- HTML 內的資源路徑應維持相對路徑，確保專案站點子路徑 `/2026-okinawa/` 可正常運作。
- 本機驗證可在專案根目錄執行：

  ```bash
  python3 -m http.server 8080
  ```

- 測試網址為 `http://localhost:8080/`；不得為了預覽而引入新的建置工具。

## Git 規範

- 遵循 Conventional Commits。
- Commit 訊息使用繁體中文，標題需清楚描述異動。
- Commit 內文需說明修改內容、影響範圍或目的。
- 不得在未取得使用者同意前 force-push 或改寫已推送的歷史。
