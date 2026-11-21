function handleSubmit(event) {
  event.preventDefault(); // بيمنع الصفحة إنها تعمل ريفريش

  // هنا بنسحب اللي المستخدم كتبه من الحقول اللي فوق
  const name = document.getElementById('userName').value;
  const phone = document.getElementById('userPhone').value;
  const message = document.getElementById('userMessage').value;

  // اكتب رقمك هنا بالصيغة الدولية (مثال لمصر: 201012345678) من غير + أو 00
  const myWhatsAppNumber = "201559666985"; 

  // تجهيز نص الرسالة
  const fullText = `رسالة جديدة:\nالاسم: ${name}\nالهاتف: ${phone}\nالرسالة: ${message}`;
  const encodedText = encodeURIComponent(fullText);

  // فتح الواتساب
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${myWhatsAppNumber}&text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
}