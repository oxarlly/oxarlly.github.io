fetch('https://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json')
  .then(response => response.json())
  .then(data => {
    const city = data.city || '未知城市';
    document.getElementById("location").innerText = `位置：${city} | 千顷文化`;
  })
  .catch(error => {
    console.error('获取位置信息失败:', error);
    document.getElementById("location").innerText = '获取位置信息失败 | 千顷文化';
  });