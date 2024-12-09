function generateCode() {
  // 获取用户选择或输入的参数
  const model = document.getElementById("model").value;
  const type = document.getElementById("type").value;
  const voltage = document.getElementById("voltage").value;
  const speed = document.getElementById("speed").value.trim();
  const stroke = document.getElementById("stroke").value.trim();
  const installation = document.getElementById("installation").value.trim();
  const frontend = document.getElementById("front-end").value;
  const backend = document.getElementById("backend").value;
  const colour = document.getElementById("colour").value;
  const signal = document.getElementById("signal").value;
  const lineSequence = document.getElementById("line-sequence").value;
  const plugType = document.getElementById("Plug-type").value;
  const lineLength = document.getElementById("Line-length").value.trim();
  const flowCode = document.getElementById("Flow-code").value.trim();

  // 检查用户输入
  if (!speed) {
      alert("请填写负载速度！");
      return;
  }
  if (!stroke) {
      alert("请填写行程尺寸！");
      return;
  }
  if (!installation) {
      alert("请填写安装尺寸！");
      return;
  }

  // 拼接规格码
  const code = `${model} - ${type} ${voltage} ${speed} ${stroke} ${installation} - ${frontend} ${backend} ${colour} ${signal} ${lineSequence} ${plugType} - ${lineLength} ${flowCode}`;

  // 显示结果
  document.getElementById("result").innerText = `生成的规格码：${code}`;

   // 显示用户选择的内容
   const userSelections = `
   推杆类型：${type} 
   电压：${voltage}
   负载速度：${speed} 
   行程尺寸：${stroke}
   安装尺寸：${installation} 
   前端型式：${frontend}
   后端型式：${backend} 
   颜色：${colour}
   信号输出：${signal}
   线序：${lineSequence}
   插头类型：${plugType}
   线长：${lineLength}
   流水码：${flowCode}
 `;

 // 显示用户选择的内容
 document.getElementById("userSelections").innerText = `您选择的内容：\n${userSelections}`;
}
