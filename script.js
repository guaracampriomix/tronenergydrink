const lojas = [
  { 
    nome: "RIO SUL", 
    lat: -22.798465383728914, 
    lng: -43.644806268176616, 
    endereco: "Estr. Rio São Paulo, 1380 - Campo Lindo, Seropédica - RJ, 23890-000", 
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521971115232" 
  },
  { 
    nome: "RIO SUL", 
    lat: -22.74137499494114, 
    lng: -43.48521255254507, 
    endereco: "R. Tomás Fonseca, 500 - Comendador Soares, Nova Iguaçu - RJ, 26280-376", 
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521971115232" 
  },
  { 
    nome: "ADONAI", 
    lat: -22.846318250530064, 
    lng: -43.32485432192923, 
    endereco: "R. Cisplatina, 9 - 11 - Irajá, Rio de Janeiro - RJ, 21235-070",
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521971115232" 
  },
  {
    nome: "BALCÃO MENDANHA", 
    lat: -22.858360780252575, 
    lng: -43.541599754301764, 
    endereco: "Estr. do Mendanha, 4489 - Campo Grande, Rio de Janeiro - RJ, 23095-842",
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521971115232" 
  },
  {
  nome: "BALCÃO CIDADE DE DEUS", 
  lat: -22.945876912014718, 
  lng: -43.36200909725777, 
  endereco: "Estrada Marechal Miguel Salazar Mendes de Moraes, 1505 - Cidade de Deus, Rio de Janeiro - RJ, 22770-333",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521971115232" 
},
{
  nome: "BALCÃO NOVA IGUAÇU", 
  lat: -22.762274063523122, 
  lng: -43.42681310339188, 
  endereco: "Av. Carlos Marques Rollo, 1055 - Vila Nova, Nova Iguaçu - RJ, 26225-290",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521971115232" 
},
{
  nome: "BALCÃO CAXIAS", 
  lat: -22.792038109743192, 
  lng: -43.30925477009973, 
  endereco: "Av. Governador Leonel de Moura Brizola, 1041 - Centro, Duque de Caxias - RJ, 25010-007",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521971115232" 
},
{
  nome: "BALCÃO CADEG", 
  lat: -22.894934250014558, 
  lng: -43.23401184104212, 
  endereco: "Rua Capitão Félix, 110 Pav 2 , Rua 6 , Lj 2 e 4 BLC L - Benfica, Rio de Janeiro - RJ, 20920-310",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521971115232" 
},
{
  nome: "BALCÃO RIO SÃO PAULO", 
  lat: -22.885199292609364, 
  lng: -43.56916987650832, 
  endereco: "Estr. Rio São Paulo, 1700 - Campo Grande, Rio de Janeiro - RJ, 23087-005",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521971115232" 
},
{
  nome: "BALCÃO IRAJÁ 1", 
  lat: -22.827572525711158, 
  lng: -43.33898532029502, 
  endereco: "Avenida Brasil, 19001 - Pavilhão: 64 - Lojas: 22, 23, e 24 - Irajá, Rio de Janeiro - RJ, 21000-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521971115232" 
},
{
  nome: "BALCÃO IRAJÁ 2", 
  lat: -22.832129382719444, 
  lng: -43.34167783558219, 
  endereco: "Estr. Pedro Borges de Freitas, 741 - pavilhão 74 - Colégio, Rio de Janeiro - RJ, 21235-390",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521971115232" 
},
];


function calculateDistance(lat1, lng1, lat2, lng2) {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const R = 6371; 
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}


function verificarHorario(loja) {
  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();
  let status = "Fechado";

  if (day >= 1 && day <= 5) { 
    if (loja.horario.segSex.start !== 0 && loja.horario.segSex.end !== 0 &&
        hour >= loja.horario.segSex.start && hour < loja.horario.segSex.end) {
      status = "Aberto";
    }
  } else if (day === 6) { 
    if (loja.horario.sabado.start !== 0 && loja.horario.sabado.end !== 0 &&
        hour >= loja.horario.sabado.start && hour < loja.horario.sabado.end) {
      status = "Aberto";
    }
  } else { 
    if (loja.horario.domingo.start !== 0 && loja.horario.domingo.end !== 0 &&
        hour >= loja.horario.domingo.start && hour < loja.horario.domingo.end) {
      status = "Aberto";
    }
  }
  return status;
}


document.getElementById("locationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedRegion = document.getElementById("region").value;

  if (!selectedRegion) {
    alert("Selecione um bairro.");
    return;
  }

  const [userLat, userLng] = selectedRegion.split(",").map(Number);

  const resultsDiv = document.getElementById("results");

  
  const distances = lojas.map(loja => ({
    nome: loja.nome,
    endereco: loja.endereco,
    distancia: calculateDistance(userLat, userLng, loja.lat, loja.lng),
    lat: loja.lat,
    lng: loja.lng,
    status: verificarHorario(loja),
    whatsapp: loja.whatsapp
  })).filter(loja => loja.distancia <= 15); 

  distances.sort((a, b) => a.distancia - b.distancia);

  if (distances.length > 0) {
    resultsDiv.innerHTML = "<h2>Lojas mais próximas:</h2>" +
      distances.map(loja => `
        <div>
          <p><strong>${loja.nome}</strong></p>
          <p>${loja.endereco}</p>
          <p>Distância: ${loja.distancia.toFixed(2)} km</p>
          <p style="color: ${loja.status === 'Aberto' ? 'green' : 'red'};">
            <i class="fas fa-clock"></i> ${loja.status}
          </p>
          <a href="https://www.google.com/maps?q=${loja.lat},${loja.lng}" target="_blank">
            <button class="directions-button">Como Chegar</button>
          </a>
          <a href="https://wa.me/${loja.whatsapp}?text=Olá, gostaria de saber mais sobre o TRON ${loja.nome}" target="_blank">
            <button class="whatsapp-button">
              <i class="fa fa-whatsapp" style="margin-right: 5px; color: #25D366;"></i>
              WhatsApp
            </button>
          </a>
        </div>
      `).join("");
  } else {
    resultsDiv.innerHTML = "<h2>Poxa! Ainda não temos TRON próximo a sua localização.</h2>";
  }
});