document.addEventListener("DOMContentLoaded", function () {
    // Obtém todos os links da navbar
    let navLinks = document.querySelectorAll(".nav-link");

    // Adiciona evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Obtém o ID da seção clicada
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            // Esconde todas as seções
            document.querySelectorAll(".content-section").forEach(section => {
                section.classList.remove("active");
            });

            // Mostra apenas a seção clicada
            targetSection.classList.add("active");

            // Rolagem suave para a seção
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Ajusta a posição para não ficar colado ao topo
                behavior: "smooth"
            });
        });
    });

    // Exibir a primeira seção por padrão ao carregar a página
    document.querySelector(".content-section").classList.add("active");

window.openTab = function(event, tabId) {
            let tabContents = document.querySelectorAll(".tab-content");
            let tabButtons = document.querySelectorAll(".tab-button");

            tabContents.forEach(content => content.classList.remove("active"));
            tabButtons.forEach(button => button.classList.remove("active"));

            document.getElementById(tabId).classList.add("active");
            event.currentTarget.classList.add("active");
};


    // Função para gerar o calendário
    window.generateCalendar = function() {
        console.log("Função generateCalendar foi chamada!"); // Teste para ver se a função está a ser chamada

        let startDate = document.getElementById("startDate").value;
        if (!startDate) {
            alert("Por favor, insira uma data de início.");
            return;
        }

        let calendarDiv = document.getElementById("calendar");
        calendarDiv.innerHTML = ""; // Limpa o calendário anterior

        let startDateObj = new Date(startDate);


        const trainingPlan = [
            { title: "Semana 1 - Integração e cultura da Empresa", duration: 1,
            details: `
                <b>Atividades:</b>
                <ul>
                    <li>Apresentação da MediaMarkt e do objetivo do Service</li>
                    <li>Introdução dos valores e cultura da empresa</li>
                    <li>Visita às instalações da loja</li>
                    <li>Regras e regulamentos internos</li>
                    <li>Apresentação da ferramenta de gestão de processos do Service</li>
                </ul>
                <b>Métodos:</b>
                <ul>
                    <li>Apresentações dinâmicas e interativas</li>
                    <li>Sessão de integração </li>
                    <li>Formação na Academia</li>
                    <li>Prática com WebSip acompanhada pelo buddy/supervisor</li>
                </ul>
            ` 
            },
            { title: "Semana 2-4 - Bases técnicas e diagnóstico", duration: 3,
            details: `
            <b>Atividades:</b>
                <ul>
                    <li>Diagnóstico de falhas comuns nos equipamentos mais reparados</li>
                    <li>Introdução às ferramentas e equipamentos do Service </li>
                    <li>Formação no software de diagnóstico e controlo de qualidade (PCRK,Bootpack,Picea)</li>
                </ul>
                <b>Métodos:</b>
                <ul>
                    <li>Acompanhamento de buddy/supervisor em reparações</li>
                    <li>Diagnósticos práticos supervisionados</li>
                </ul>
                <b>Avaliação:</b>Teste teórico e prático de diagnóstico de falhas
            `
            },
            { title: "Semana 5-6 - Aperfeiçoamento das reparações e Venda de serviços", duration: 2,
            details: `
                <b>Atividades:</b>
                <ul>
                    <li>Prática de reparações com supervisão</li>
                    <li>Identificação e resolução de problemas complexos</li>
                    <li>Formação de atendimento ao cliente e vendas</li>
                    <li>Simulação de interações com clientes</li>
                </ul>
                <b>Métodos:</b>
                <ul>
                    <li>Formação interna e observação de técnicos experientes</li>
                    <li>Formação prática de vendas e gestão de conflitos</li>
                </ul>
            `
            },
            { title: "Semana 7-8 - Diagnóstico e reparações avançadas", duration: 2,
            details: `
                <b>Atividades:</b>
                <ul>
                    <li>Reparação de equipamentos mais complexos</li>
                    <li>Aprimorar a utilização das ferramentas de diagnóstico</li>
                    <li>Otimização do tempo de reparação</li>
                </ul>
                <b>Métodos:</b>
                <ul>
                    <li>Casos de estudo avançados</li>
                    <li>Acompanhamento de técnicos experientes</li>
                </ul>
            `
            },
            { title: "Semana 9 - Simulação completa do atendimento ",duration: 1, 
            details: `
                <b>Atividades:</b>
                <ul>
                    <li>Simulação de um dia completo no Service</li>
                    <li>Revisão das vendas de serviços adicionais</li>
                    <li>Feedback dos colegas sobre o novo técnico</li>
                </ul>
                <b>Métodos:</b>
                <ul>
                    <li>Simulação prática do atendimento ao cliente</li>
                    <li>Revisão geral do conteúdo das formações </li>
                </ul>
				<b>Avaliação:</b>
				<ul>
                    <li>Avaliação teórica consistiria num teste de escolha múltipla na plataforma da Academia.</li>
					<li>Avaliação prática consistiria numa reparação completa e na avaliação da simulação prática do atendimento ao cliente.</li>
					<li>Todas estas avaliações ao longo do percurso formativo servem para conhecer as dificuldades do técnico e não para focar no resultado em si.</li>
                </ul>
            `
            },
            { title: "Semana 10-12 - Acompanhamento e validação",duration: 3,
            details: `
                <b>Atividades:</b>
                <ul>
                    <li>Monitoramento contínuo do desempenho</li>
                    <li>Validação da aplicação dos conhecimentos adquiridos</li>
                </ul>
                <b>Métodos:</b>
                <ul>
                    <li>Observação prática no ambiente de trabalho</li>
                    <li>Feedback e coaching contínuo</li>
                </ul>
            `
            }
        ];

        /* <-- trainingPlan.forEach((week, index) => {
            let weekStart = new Date(startDateObj);

    // Soma das durações anteriores para calcular o início correto
    let previousWeeks = trainingPlan.slice(0, index).reduce((sum, w) => sum + w.duration, 0);
    weekStart.setDate(weekStart.getDate() + previousWeeks * 7);

    let weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + (week.duration * 7) - 1); // Define a data final da fase

    let weekElement = document.createElement("button");
    weekElement.className = "btn btn-outline-primary m-2";
    weekElement.innerText = `${week.title} (${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()})`;
    weekElement.setAttribute("data-bs-toggle", "modal");
    weekElement.setAttribute("data-bs-target", "#trainingModal");
    weekElement.onclick = function () {
        document.getElementById("trainingModalLabel").innerText = week.title;
        document.getElementById("trainingDetails").innerHTML = week.details;
    };

    calendarDiv.appendChild(weekElement);
        }); --> */
	  
	  let currentMonth = null;

trainingPlan.forEach((week, index) => {
    let weekStart = new Date(startDateObj);
    let previousWeeks = trainingPlan.slice(0, index).reduce((sum, w) => sum + w.duration, 0);
    weekStart.setDate(weekStart.getDate() + previousWeeks * 7);
    
    let weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + (week.duration * 7) - 1);

    let monthName = weekStart.toLocaleString('pt-PT', { month: 'long', year: 'numeric' });

    // Se o mês mudou, adiciona um separador
    if (monthName !== currentMonth) {
        currentMonth = monthName;
        let monthHeader = document.createElement("h3");
        monthHeader.innerText = currentMonth;
        monthHeader.style.marginTop = "20px";
        monthHeader.style.padding = "10px";
        monthHeader.style.background = "#f0f0f0";
        monthHeader.style.borderRadius = "5px";
        calendarDiv.appendChild(monthHeader);
    }

    let weekElement = document.createElement("button");
    weekElement.className = "btn btn-outline-primary m-2";
    weekElement.innerText = `${week.title} (${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()})`;
    weekElement.setAttribute("data-bs-toggle", "modal");
    weekElement.setAttribute("data-bs-target", "#trainingModal");
    weekElement.onclick = function () {
        document.getElementById("trainingModalLabel").innerText = week.title;
        document.getElementById("trainingDetails").innerHTML = week.details;
    };

    calendarDiv.appendChild(weekElement);
});
    };
});
