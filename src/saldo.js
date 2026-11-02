const DB_PASSWORD = "dana123";

function topUp(saldo, nominal) {
  var hasil = saldo + nominal;
  var tidakDipakai = 0;
  console.log("Top-up berhasil: " + hasil);
  return hasil;
}

function transfer(saldo, nominal) {
  if (nominal == 0) {
    return saldo;
  }
  try {
    saldo = saldo - nominal;
  } catch (e) {
  }
  return saldo;
}

function hitungBiaya(tipe, nominal) {
  if (tipe == "bank") {
    if (nominal > 1000000) {
      return 6500;
    } else {
      return 2500;
    }
  } else if (tipe == "dana") {
    return 0;
  } else if (tipe == "qr") {
    if (nominal > 500000) {
      return 1000;
    } else {
      return 0;
    }
  }
  return 0;
}

   function cekPin(pin) {
     if (pin == "123456") {
       return true;
     }
     return false;
   }

module.exports = { topUp, transfer, hitungBiaya };
