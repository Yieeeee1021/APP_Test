function forceReset() {
    // 彈出確認視窗，避免誤觸
    if (confirm("⚠️ 確定要徹底重置嗎？\n這將刪除所有設定、記帳明細以及累積的總存款！")) {
        
        // 1. 徹底清除 LocalStorage (瀏覽器資料庫)
        localStorage.clear();
        
        // 2. 將畫面上的輸入框手動恢復為初始預設值
        document.getElementById('income').value = 40000;
        document.getElementById('fixed').value = 7500;
        document.getElementById('credit').value = 0;
        document.getElementById('saving').value = 10000;
        document.getElementById('investment').value = 10000;
        
        // 3. 重置隱藏的累計變數 (雖然 localStorage 已清，但保險起見手動重設)
        localStorage.setItem('todayHistory', '[]');
        localStorage.setItem('totalExtraSpent', '0');
        localStorage.setItem('extraSavings', '0');
        
        // 4. 顯示成功訊息並重新載入網頁
        alert("資料已完全清空，已為您準備好新的開始！🌸");
        window.location.reload(); 
    }
}
