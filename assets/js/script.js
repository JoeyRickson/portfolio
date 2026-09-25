const translations = {
    pt: {
        'meta.title': 'Joey Rickson | Engenheiro de Infraestrutura & Software',
        'meta.description': 'Portfólio profissional de Joey Rickson Guimarães Oliveira. Especialista em infraestrutura, software, cloud e ERP Protheus.',
        'nav.brand': 'Joey',
        'nav.about': 'Sobre',
        'nav.specialties': 'Especialidades',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.contact': 'Contato',
        'controls.theme': 'Tema',
        'controls.language': 'Idioma',
        'controls.themeButtonDark': 'Branco',
        'controls.themeButtonLight': 'Preto',
        'hero.badge': 'Infraestrutura • Desenvolvimento • ERP • Cloud • Dados',
        'hero.description': 'Profissional de Tecnologia da Informação com sólida experiência em suporte técnico, infraestrutura e administração de ambientes corporativos, atuando de forma estratégica em cenários híbridos e remotos.',
        'hero.projectsButton': 'Ver Projetos',
        'hero.cvButton': 'Download CV',
        'about.badge': 'O Perfil',
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou um profissional de Tecnologia da Informação focado em suporte técnico, infraestrutura e administração de ambientes corporativos, com ampla facilidade de atuação em cenários operacionais híbridos e remotos. Possuo sólida vivência prática com tecnologias essenciais de mercado, incluindo Active Directory, GLPI, SQL Server, redes estruturadas LAN/WAN, soluções de BI como Qlik Sense, Microsoft 365, conexões VPNs, firewalls pfSense, o ecossistema ERP TOTVS Protheus e rotinas de segurança com Veeam Backup.',
        'about.p2': 'Atuo com um perfil marcadamente analítico e colaborativo, destacando-me pela forte capacidade de resolução rápida de problemas complexos e ágil adaptação a novos sistemas e metodologias, mantendo sempre o foco principal na estabilidade operacional e na melhoria contínua de processos internos.',
        'about.p3': 'Adicionalmente, possuo conhecimentos fundamentais em desenvolvimento web e mobile aplicados de maneira prática em projetos acadêmicos, participando ativamente de iniciativas de otimização, uso de metodologias ágeis e suporte à evolução de soluções e fluxos internos de tecnologia.',
        'about.timeline.0.title': 'Técnico de Informática',
        'about.timeline.0.text': 'Manutenção corretiva, redes locais estruturadas e suporte básico de hardware.',
        'about.timeline.1.title': 'Analista de Suporte',
        'about.timeline.1.text': 'Atendimento técnico N2, gestão de chamados via plataformas GLPI/ServiceNow e acompanhamento de acordos de SLA.',
        'about.timeline.2.title': 'Analista de Infraestrutura',
        'about.timeline.2.text': 'Gerenciamento de servidores, privilégios via Active Directory, administração de firewalls e links LAN/WAN.',
        'about.timeline.3.title': 'Analista ERP Protheus',
        'about.timeline.3.text': 'Análise de inconsistências sistêmicas, liberações no módulo SIGACFG, extração e tuning de dados via SQL Server.',
        'about.timeline.4.title': 'Infrastructure & Software Engineer',
        'about.timeline.4.text': 'Orquestração completa unindo código limpo (Python), ambientes em nuvem estáveis e melhoria operacional de ponta a ponta.',
        'specialties.badge': 'Expertise Core',
        'specialties.title': 'Especialidades',
        'specialties.0.title': 'Infraestrutura',
        'specialties.0.text': 'Gestão e arquitetura de ativos de servidores, Active Directory, políticas de segurança, rotinas de Veeam Backup e ambientes corporativos híbridos.',
        'specialties.1.title': 'Desenvolvimento',
        'specialties.1.text': 'Criação de scripts robustos em Python, soluções integradas ao GLPI, metodologias ágeis e fundamentos web/mobile acadêmicos.',
        'specialties.2.title': 'Cloud & Servidores',
        'specialties.2.text': 'Gerenciamento de máquinas virtuais Linux, provisionamento em Google Cloud Platform (GCP), Microsoft 365 e TOTVS Cloud.',
        'specialties.3.title': 'Banco de Dados & BI',
        'specialties.3.text': 'Extração e modelagem de dados complexos com SQL Server e PostgreSQL estruturados para dashboards e relatórios de BI (Qlik Sense).',
        'specialties.4.title': 'ERP Protheus',
        'specialties.4.text': 'Sustentação aprofundada de módulos de Backoffice, controle de privilégios e parametrizações complexas globais via SIGACFG.',
        'specialties.5.title': 'Redes & Segurança',
        'specialties.5.text': 'Segurança de borda perimetral configurada via firewalls FortiGate e pfSense, túneis VPN estáveis e gerência de redes LAN/WAN.',
        'projects.badge': 'Inovação Prática',
        'projects.title': 'Projetos em Destaque',
        'projects.description': 'Produtos pessoais, automações e soluções de infraestrutura desenvolvidos para resolver problemas reais, além de projetos acadêmicos selecionados.',
        'projects.live': 'Acessar aplicação',
        'projects.repo': 'Repositório GitHub',
        'projects.card5.tag': 'PWA & FINTECH PESSOAL',
        'projects.card5.date': 'SET/2026',
        'projects.card5.title': 'SaldoPlan — Controle Financeiro & Simulação de Folha',
        'projects.card5.text': 'PWA criada para centralizar salário, gastos, reservas e planejamento mensal em uma única experiência. O sistema trabalha com ciclos financeiros, lançamentos, valores guardados e uma simulação de folha com horas extras, adicional noturno, DSR e descontos. Também oferece funcionamento offline, exportação/importação de dados e backup opcional em nuvem, transformando uma necessidade pessoal em um produto utilizável no dia a dia.',
        'projects.card6.tag': 'MOBILE & PRODUTO PESSOAL',
        'projects.card6.date': 'SET/2026',
        'projects.card6.title': 'Dose Certa — Controle de Medicamentos',
        'projects.card6.text': 'Aplicativo mobile desenvolvido em React Native com Expo para organizar o uso diário de medicamentos. Possui histórico e calendário, horário configurável, observações, persistência local com SQLite, temas, notificações e lembretes com suporte a alarme no Android. O projeto também passou por ciclo real de build e distribuição via EAS.',
        'projects.card7.tag': 'CLOUD, VPN & INFRAESTRUTURA',
        'projects.card7.date': 'AGO–SET/2026',
        'projects.card7.title': 'File Server em GCP + VPN Site-to-Site',
        'projects.card7.text': 'Implantação de um File Server Windows em Google Cloud para uso interno, integrado à rede local por túnel VPN site-to-site com FortiGate. O projeto envolveu VPC, roteamento, segmentação por VLAN, acesso SMB, estrutura de compartilhamentos setoriais, scripts de mapeamento e validações de conectividade entre a fábrica e a nuvem. Informações sensíveis de rede foram omitidas por segurança.',
        'projects.card8.tag': 'AUTOMAÇÃO & APLICAÇÃO INTERNA',
        'projects.card8.date': 'SET/2026',
        'projects.card8.title': 'Checklist Preventiva — Aplicação Interna',
        'projects.card8.text': 'Evolução e publicação de uma aplicação interna para execução e registro de checklists de manutenção preventiva. Foram trabalhados autenticação, API REST, controle de versão, assinatura em PDF, identidade visual, inatividade de sessão e operação como serviço via tarefas agendadas, além de procedimentos de backup, atualização e rollback.',
        'projects.card9.tag': 'ITSM & CUSTOMIZAÇÃO',
        'projects.card9.date': 'SET/2026',
        'projects.card9.title': 'Plugin GLPI — Contexto do Solicitante',
        'projects.card9.text': 'Desenvolvimento de plugin próprio para GLPI 10, adicionando ao atendimento um painel contextual com informações úteis do solicitante, como localização, grupo e cargo. A customização melhora a triagem dos chamados e reduz consultas manuais durante o suporte sem alterar o núcleo da plataforma.',
        'projects.card10.tag': 'DEV TOOL & ERP',
        'projects.card10.date': 'SEP/2026',
        'projects.card10.title': 'SQL Generator Protheus',
        'projects.card10.text': 'Ferramenta criada para acelerar a montagem de consultas SQL voltadas ao ecossistema TOTVS Protheus, reduzindo trabalho repetitivo durante análises, suporte e investigação de dados. O projeto transforma conhecimento operacional de ERP e banco de dados em uma ferramenta reutilizável e disponível publicamente no GitHub.',
        'projects.card11.tag': 'NETWORKING & SEGURANÇA',
        'projects.card11.date': 'SEP/2026',
        'projects.card11.title': 'FortiGate — Conectividade, SD-WAN & VPNs',
        'projects.card11.text': 'Administração e evolução de conectividade corporativa em ambiente FortiGate com múltiplos links de Internet. O trabalho inclui configuração e troubleshooting de SD-WAN, VLANs, políticas de firewall, criação e ajustes de VPNs, roteamento, acesso administrativo externo, testes de portas e URLs, análise de tráfego e integração de redes locais com serviços em cloud. Endereços, regras e demais informações sensíveis foram omitidos por segurança.',
        'projects.card1.tag': 'BIG DATA & INTEGRAÇÃO',
        'projects.card1.date': 'MAI/2026',
        'projects.card1.title': 'SAMAUMA — Inteligência de Crédito Comercial',
        'projects.card1.text': 'Apresentado na Mostra de Projetos Estácio Amazonas, o SAMAUMA é uma plataforma inovadora voltada para a cadeia de suprimentos da região Norte. Ele resolve a assimetria de crédito ao integrar motores de regras Big Data tradicionais com variáveis não-estruturadas locais exclusivas (como o nível de seca severa de rios e gargalos de logística fluvial). O diferencial está no isolamento de risco: distinguir se um atraso do fornecedor é calote financeiro ou impacto sazonal geográfico, promovendo inclusão financeira justa.',
        'projects.card2.tag': 'MOBILE & CORPORATIVO',
        'projects.card2.date': 'NOV/2024',
        'projects.card2.title': 'Cliente Seguro',
        'projects.card2.text': 'Desenvolvida para a empresa parceira Hise Plast na disciplina de Programação para Dispositivos Móveis (orientada pelo prof. Paulo Seixas), a aplicação otimiza a gestão de crédito corporativo e o controle de riscos. Permite a consulta rápida via CNPJ, extração e análise automatizada de pagamentos de boletos, histórico de protestos e cálculo direto do risco de inadimplência, operando em total conformidade técnica com a LGPD.',
        'projects.card3.tag': 'DESKTOP SOFTWARE (POO)',
        'projects.card3.date': 'FEV–MAI/2024',
        'projects.card3.title': 'EAAM — Escola Abastece Amazonas',
        'projects.card3.text': 'Sistema desktop de alta robustez desenvolvido sob a ótica da Programação Orientada a Objetos em Java, sob a orientação da profª. Isandra Augusta. A solução foi projetada de ponta a ponta para resolver gargalos reais de gestão de estoque em instituições públicas locais, otimizando o fluxo de cadastro, entrada, saída e controle de insumos alimentícios destinados a refeições escolares de forma limpa, auditável e segura.',
        'projects.card4.tag': 'EXTENSÃO & EMBARCADOS',
        'projects.card4.date': 'Projeto de Extensão',
        'projects.card4.title': 'Kit Plantinha IoT — Monitoramento Residencial',
        'projects.card4.text': 'Iniciativa extensionista focada em aproximar competências complexas de engenharia eletrônica à resolução de demandas da comunidade local de Manaus. Desenhado especificamente para mitigar a barreira de familiaridade digital da cliente (Sra. Raimunda da Silva), a arquitetura combinou microcontroladores de baixo custo e telemetria de sensores.',
        'experience.badge': 'Histórico',
        'experience.title': 'Experiência & Alianças',
        'experience.partnerBadge': 'Parceria Estratégica',
        'experience.amadev.role': 'Engenharia de Infraestrutura, Servidores & Banco de Dados Core',
        'experience.amadev.text': 'A Amadev (empresa parceira capitaneada por Timóteo Bentes) é uma software house focada em criar soluções digitais inovadoras, unindo tecnologia, design e estratégia. Desenvolvemos produtos modernos, funcionais e centrados no usuário, sempre com compromisso, qualidade e proximidade com o cliente. Nossa missão é transformar ideias em experiências digitais inteligentes, escaláveis e de alto impacto. Vem com a gente trilhar essa jornada 🚀',
        'experience.amadev.sectionTitle': 'Atuação & Espírito de Equipe:',
        'experience.amadev.sectionText': 'Somando forças através de um sólido espírito de colaboração onde cada especialista potencializa o que faz de melhor. Focado na espinha dorsal técnica, meu papel foca em blindar e otimizar o ecossistema com gestão de servidores e administração de banco de dados robustos, garantindo alta performance, estabilidade e crescimento conjunto para que toda ideia seja impulsionada sem gargalos operacionais.',
        'experience.kodigos.role': 'Analista de TI (Abr/2026 - Atual)',
        'experience.kodigos.summary': 'Atuação multidisciplinar em infraestrutura, redes, segurança, sistemas corporativos, cloud, banco de dados e desenvolvimento de soluções internas, apoiando a continuidade e evolução do ambiente de TI.',
        'experience.kodigos.sectionInfra': 'Infra & Segurança',
        'experience.kodigos.sectionSystems': 'Sistemas & Dados',
        'experience.kodigos.sectionOps': 'Operação & Governança',
        'experience.kodigos.item1': 'Administração de FortiGate, FortiClient, FortiSwitch e HPE Aruba, com criação, configuração e testes de VPNs IPsec/SSL, VLANs, SD-WAN, NAT, políticas de firewall, roteamento e segmentação de rede.',
        'experience.kodigos.item2': 'Configuração e validação de acessos internos e externos, portas, URLs, serviços publicados e conectividade entre redes, utilizando testes TCP, curl, Test-NetConnection, ping, traceroute, sniffer e análise de tráfego.',
        'experience.kodigos.item3': 'Administração de ambientes GCP, Windows Server e Linux, incluindo File Server, compartilhamentos, serviços internos, tarefas agendadas e integração entre infraestrutura local e cloud.',
        'experience.kodigos.item4': 'Suporte a Wi-Fi corporativo, impressoras, impressoras térmicas, coletores e infraestrutura de CFTV, incluindo câmeras IP, NVRs e troubleshooting de comunicação.',
        'experience.kodigos.item5': 'Sustentação e troubleshooting do TOTVS Protheus, integrações, acessos, inconsistências e ambientes em cloud.',
        'experience.kodigos.item6': 'Atuação com SQL Server e MariaDB, realizando consultas, validações, auditorias e análise de dados relacionados ao ERP e sistemas internos.',
        'experience.kodigos.item7': 'Monitoramento e troubleshooting com Zabbix e Grafana, além de administração e customização do GLPI.',
        'experience.kodigos.item8': 'Desenvolvimento e manutenção de ferramentas internas com Python, Node.js, Express, APIs REST, PowerShell e plugins para GLPI.',
        'experience.kodigos.item9': 'Troubleshooting de rede, VPN, firewall, servidores, bancos de dados, aplicações, impressão, videomonitoramento e dispositivos de rede.',
        'experience.kodigos.item10': 'Interface técnica com fornecedores, consultorias e equipes externas, acompanhando incidentes, implantações e mudanças em infraestrutura, conectividade, cloud e sistemas.',
        'experience.kodigos.item11': 'Participação em auditorias internas e externas, representando o setor de TI no fornecimento de evidências, documentação e validações de controles e processos tecnológicos.',
        'experience.kodigos.item12': 'Elaboração de documentação técnica, procedimentos, backups, planos de rollback e registros de mudanças para apoiar operação, continuidade e rastreabilidade.',
        'experience.kodigos.stack': '<strong class="text-white/55">Stack:</strong> FortiGate • FortiClient • FortiSwitch • HPE Aruba • IPsec/SSL VPN • SD-WAN • VLAN • NAT • GCP • Windows Server • Linux • Zabbix • Grafana • GLPI • SQL Server • MariaDB • TOTVS Protheus • Python • Node.js • Express • PowerShell • REST APIs • CFTV • NVR • Zebra • Intelbras',
        'experience.tam.role': 'Analista de TI — Alocado na Bajaj do Brasil (Fev/2026 - Abr/2026)',
        'experience.tam.item1': 'Atuação em canal homologado TOTVS focado em suporte sistêmico e infraestrutura.',
        'experience.tam.item2': 'Administração de segurança perimetral via firewall FortiGate e gerenciamento de ativos de rede.',
        'experience.tam.item3': 'Controle de inventário, ativos lógicos de TI e interface técnica com fornecedores globais.',
        'contact.badge': 'Conexões',
        'contact.title': 'Entrar em Contato',
        'contact.whatsapp': 'WhatsApp',
        'contact.email': 'E-mail',
        'contact.linkedin': 'LinkedIn',
        'footer.text': 'DESIGN E DESENVOLVIMENTO POR JOEY OLIVEIRA'
    },
    es: {
        'meta.title': 'Joey Rickson | Ingeniero de Infraestructura y Software',
        'meta.description': 'Portafolio profesional de Joey Rickson Guimarães Oliveira. Especialista en infraestructura, software, cloud y ERP Protheus.',
        'nav.brand': 'Joey',
        'nav.about': 'Sobre',
        'nav.specialties': 'Especialidades',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',
        'controls.theme': 'Tema',
        'controls.language': 'Idioma',
        'controls.themeButtonDark': 'Blanco',
        'controls.themeButtonLight': 'Negro',
        'hero.badge': 'Infraestructura • Desarrollo • ERP • Cloud • Datos',
        'hero.description': 'Profesional de Tecnología de la Información con sólida experiencia en soporte técnico, infraestructura y administración de entornos corporativos, actuando de forma estratégica en escenarios híbridos y remotos.',
        'hero.projectsButton': 'Ver Proyectos',
        'hero.cvButton': 'Descargar CV',
        'about.badge': 'El Perfil',
        'about.title': 'Sobre Mí',
        'about.p1': 'Soy un profesional de Tecnología de la Información enfocado en soporte técnico, infraestructura y administración de entornos corporativos, con amplia facilidad para actuar en escenarios operacionales híbridos y remotos. Tengo sólida experiencia práctica con tecnologías esenciales del mercado, incluyendo Active Directory, GLPI, SQL Server, redes estructuradas LAN/WAN, soluciones de BI como Qlik Sense, Microsoft 365, conexiones VPN, firewalls pfSense, el ecosistema ERP TOTVS Protheus y rutinas de seguridad con Veeam Backup.',
        'about.p2': 'Actúo con un perfil marcadamente analítico y colaborativo, destacándome por mi fuerte capacidad para resolver problemas complejos de forma rápida y adaptarme ágilmente a nuevos sistemas y metodologías, manteniendo siempre el foco principal en la estabilidad operativa y la mejora continua de procesos internos.',
        'about.p3': 'Además, tengo conocimientos fundamentales en desarrollo web y móvil aplicados de manera práctica en proyectos académicos, participando activamente en iniciativas de optimización, uso de metodologías ágiles y soporte a la evolución de soluciones y flujos internos de tecnología.',
        'about.timeline.0.title': 'Técnico de Informática',
        'about.timeline.0.text': 'Mantenimiento correctivo, redes locales estructuradas y soporte básico de hardware.',
        'about.timeline.1.title': 'Analista de Soporte',
        'about.timeline.1.text': 'Atención técnica N2, gestión de llamadas a través de plataformas GLPI/ServiceNow y seguimiento de acuerdos de SLA.',
        'about.timeline.2.title': 'Analista de Infraestructura',
        'about.timeline.2.text': 'Gestión de servidores, privilegios vía Active Directory, administración de firewalls y enlaces LAN/WAN.',
        'about.timeline.3.title': 'Analista ERP Protheus',
        'about.timeline.3.text': 'Análisis de inconsistencias sistémicas, liberaciones en el módulo SIGACFG, extracción y tuning de datos vía SQL Server.',
        'about.timeline.4.title': 'Infrastructure & Software Engineer',
        'about.timeline.4.text': 'Orquestación completa uniendo código limpio (Python), entornos en la nube estables y mejora operativa de extremo a extremo.',
        'specialties.badge': 'Expertise Core',
        'specialties.title': 'Especialidades',
        'specialties.0.title': 'Infraestructura',
        'specialties.0.text': 'Gestión y arquitectura de activos de servidores, Active Directory, políticas de seguridad, rutinas de Veeam Backup y entornos corporativos híbridos.',
        'specialties.1.title': 'Desarrollo',
        'specialties.1.text': 'Creación de scripts robustos en Python, soluciones integradas al GLPI, metodologías ágiles y fundamentos web/móvil académicos.',
        'specialties.2.title': 'Cloud & Servidores',
        'specialties.2.text': 'Gestión de máquinas virtuales Linux, aprovisionamiento en Google Cloud Platform (GCP), Microsoft 365 y TOTVS Cloud.',
        'specialties.3.title': 'Base de Datos & BI',
        'specialties.3.text': 'Extracción y modelado de datos complejos con SQL Server y PostgreSQL estructurados para dashboards e informes de BI (Qlik Sense).',
        'specialties.4.title': 'ERP Protheus',
        'specialties.4.text': 'Sostenimiento profundo de módulos de Backoffice, control de privilegios y parametrizaciones complejas globales vía SIGACFG.',
        'specialties.5.title': 'Redes & Seguridad',
        'specialties.5.text': 'Seguridad de borde perimetral configurada a través de firewalls FortiGate y pfSense, túneles VPN estables y gestión de redes LAN/WAN.',
        'projects.badge': 'Innovación Práctica',
        'projects.title': 'Proyectos Destacados',
        'projects.description': 'Productos personales, automatizaciones y soluciones de infraestructura creados para resolver problemas reales, además de proyectos académicos seleccionados.',
        'projects.card5.tag': 'PWA & FINTECH PERSONAL',
        'projects.card5.date': 'SEP/2026',
        'projects.card5.title': 'SaldoPlan — Control Financiero & Simulación de Nómina',
        'projects.card5.text': 'PWA creada para centralizar salario, gastos, reservas y planificación mensual en una sola experiencia. El sistema trabaja con ciclos financieros, movimientos, valores ahorrados y una simulación de nómina con horas extras, adicional nocturno, descanso remunerado y descuentos. También ofrece funcionamiento offline, exportación/importación de datos y backup opcional en la nube.',
        'projects.card6.tag': 'MOBILE & PRODUCTO PERSONAL',
        'projects.card6.date': 'SEP/2026',
        'projects.card6.title': 'Dose Certa — Control de Medicamentos',
        'projects.card6.text': 'Aplicación móvil desarrollada con React Native y Expo para organizar el uso diario de medicamentos. Incluye historial y calendario, horario configurable, observaciones, persistencia local con SQLite, temas, notificaciones y recordatorios con soporte de alarma en Android, además de build y distribución con EAS.',
        'projects.card7.tag': 'CLOUD, VPN & INFRAESTRUCTURA',
        'projects.card7.date': 'AGO–SEP/2026',
        'projects.card7.title': 'File Server en GCP + VPN Site-to-Site',
        'projects.card7.text': 'Implementación de un File Server Windows en Google Cloud para uso interno, integrado a la red local mediante un túnel VPN site-to-site con FortiGate. El proyecto incluyó VPC, enrutamiento, segmentación por VLAN, acceso SMB, compartidos departamentales, scripts de mapeo y validaciones de conectividad. La información sensible de red fue omitida por seguridad.',
        'projects.card8.tag': 'AUTOMATIZACIÓN & APP INTERNA',
        'projects.card8.date': 'SEP/2026',
        'projects.card8.title': 'Checklist Preventiva — Aplicación Interna',
        'projects.card8.text': 'Evolución y publicación de una aplicación interna para ejecutar y registrar checklists de mantenimiento preventivo. Se trabajó con autenticación, API REST, control de versiones, firma en PDF, identidad visual, inactividad de sesión, tareas programadas y procedimientos de backup, actualización y rollback.',
        'projects.card9.tag': 'ITSM & PERSONALIZACIÓN',
        'projects.card9.date': 'SEP/2026',
        'projects.card9.title': 'Plugin GLPI — Contexto del Solicitante',
        'projects.card9.text': 'Desarrollo de un plugin propio para GLPI 10 que añade al soporte un panel contextual con información útil del solicitante, como ubicación, grupo y cargo. La personalización mejora la clasificación de tickets y reduce consultas manuales sin modificar el núcleo de la plataforma.',
        'projects.card10.tag': 'DEV TOOL & ERP',
        'projects.card10.date': 'SEP/2026',
        'projects.card10.title': 'SQL Generator Protheus',
        'projects.card10.text': 'Herramienta creada para acelerar la construcción de consultas SQL para el ecosistema TOTVS Protheus, reduciendo trabajo repetitivo durante análisis, soporte e investigación de datos. El proyecto convierte conocimiento operativo de ERP y bases de datos en una herramienta reutilizable disponible públicamente en GitHub.',
        'projects.card11.tag': 'NETWORKING & SEGURIDAD',
        'projects.card11.date': 'SEP/2026',
        'projects.card11.title': 'FortiGate — Conectividad, SD-WAN & VPNs',
        'projects.card11.text': 'Administración y evolución de la conectividad corporativa en un entorno FortiGate con múltiples enlaces de Internet. El trabajo incluye configuración y troubleshooting de SD-WAN, VLANs, políticas de firewall, creación y ajustes de VPNs, enrutamiento, acceso administrativo externo, pruebas de puertos y URLs, análisis de tráfico e integración de redes locales con servicios cloud. Direcciones, reglas y otros datos sensibles fueron omitidos por seguridad.',
        'projects.card1.tag': 'BIG DATA & INTEGRACIÓN',
        'projects.card1.date': 'MAY/2026',
        'projects.card1.title': 'SAMAUMA — Inteligencia de Crédito Comercial',
        'projects.card1.text': 'Presentado en la Mostra de Projetos Estácio Amazonas, SAMAUMA es una plataforma innovadora orientada a la cadena de suministro de la región Norte. Resuelve la asimetría de crédito al integrar motores de reglas Big Data tradicionales con variables no estructuradas locales exclusivas (como el nivel de sequía severa de ríos y cuellos de botella de logística fluvial). El diferencial está en el aislamiento del riesgo: distinguir si un retraso del proveedor es morosidad financiera o impacto estacional geográfico, promoviendo inclusión financiera justa.',
        'projects.card2.tag': 'MOBILE & CORPORATIVO',
        'projects.card2.date': 'NOV/2024',
        'projects.card2.title': 'Cliente Seguro',
        'projects.card2.text': 'Desarrollada para la empresa socia Hise Plast en la disciplina de Programación para Dispositivos Móviles (orientada por el prof. Paulo Seixas), la aplicación optimiza la gestión de crédito corporativo y el control de riesgos. Permite la consulta rápida vía CNPJ, extracción y análisis automatizado de pagos de boletos, historial de protestos y cálculo directo del riesgo de incumplimiento, operando en total conformidad técnica con la LGPD.',
        'projects.card3.tag': 'SOFTWARE DE ESCRITORIO (POO)',
        'projects.card3.date': 'FEB–MAY/2024',
        'projects.card3.title': 'EAAM — Escuela Abastece Amazonas',
        'projects.card3.text': 'Sistema de escritorio de alta robustez desarrollado bajo la óptica de la Programación Orientada a Objetos en Java, bajo la orientación de la profa. Isandra Augusta. La solución fue diseñada de punta a punta para resolver cuellos de botella reales de gestión de inventario en instituciones públicas locales, optimizando el flujo de registro, entrada, salida y control de insumos alimenticios destinados a comidas escolares de forma limpia, auditable y segura.',
        'projects.card4.tag': 'EXTENSIÓN & EMBARCADOS',
        'projects.card4.date': 'Proyecto de Extensión',
        'projects.card4.title': 'Kit Plantinha IoT — Monitoreo Residencial',
        'projects.card4.text': 'Iniciativa extensionista centrada en acercar competencias complejas de ingeniería electrónica a la resolución de demandas de la comunidad local de Manaus. Diseñado específicamente para mitigar la barrera de familiaridad digital de la cliente (Sra. Raimunda da Silva), la arquitectura combinó microcontroladores de bajo costo y telemetría de sensores.',
        'experience.badge': 'Historial',
        'experience.title': 'Experiencia & Alianzas',
        'experience.partnerBadge': 'Alianza Estratégica',
        'experience.amadev.role': 'Ingeniería de Infraestructura, Servidores & Base de Datos Core',
        'experience.amadev.text': 'A Amadev (empresa socia capitaneada por Timóteo Bentes) es una software house enfocada en crear soluciones digitales innovadoras, uniendo tecnología, diseño y estrategia. Desarrollamos productos modernos, funcionales y centrados en el usuario, siempre con compromiso, calidad y cercanía con el cliente. Nuestra misión es transformar ideas en experiencias digitales inteligentes, escalables y de alto impacto. Acompáñanos en este camino 🚀',
        'experience.amadev.sectionTitle': 'Actuación & Espíritu de Equipo:',
        'experience.amadev.sectionText': 'Sumando fuerzas a través de un sólido espíritu de colaboración donde cada especialista potencia lo que hace mejor. Enfocado en la espina dorsal técnica, mi rol se centra en blindar y optimizar el ecosistema con gestión de servidores y administración de bases de datos robustas, garantizando alta performance, estabilidad y crecimiento conjunto para que cada idea avance sin cuellos de botella operativos.',
        'experience.kodigos.role': 'Analista de TI (Abr/2026 - Actual)',
        'experience.kodigos.summary': 'Actuación multidisciplinaria en infraestructura, redes, seguridad, sistemas corporativos, cloud, bases de datos y desarrollo de soluciones internas, apoyando la continuidad y evolución del entorno de TI.',
        'experience.kodigos.sectionInfra': 'Infraestructura & Seguridad',
        'experience.kodigos.sectionSystems': 'Sistemas & Datos',
        'experience.kodigos.sectionOps': 'Operación & Gobernanza',
        'experience.kodigos.item1': 'Administración de FortiGate, FortiClient, FortiSwitch y HPE Aruba, con creación, configuración y pruebas de VPN IPsec/SSL, VLAN, SD-WAN, NAT, políticas de firewall, enrutamiento y segmentación de red.',
        'experience.kodigos.item2': 'Configuración y validación de accesos internos y externos, puertos, URLs, servicios publicados y conectividad entre redes mediante pruebas TCP, curl, Test-NetConnection, ping, traceroute, sniffer y análisis de tráfico.',
        'experience.kodigos.item3': 'Administración de entornos GCP, Windows Server y Linux, incluyendo File Server, recursos compartidos, servicios internos, tareas programadas e integración entre infraestructura local y cloud.',
        'experience.kodigos.item4': 'Soporte a Wi-Fi corporativo, impresoras, impresoras térmicas, colectores e infraestructura de CCTV, incluyendo cámaras IP, NVR y troubleshooting de comunicación.',
        'experience.kodigos.item5': 'Soporte y troubleshooting de TOTVS Protheus, integraciones, accesos, inconsistencias y entornos cloud.',
        'experience.kodigos.item6': 'Trabajo con SQL Server y MariaDB mediante consultas, validaciones, auditorías y análisis de datos relacionados con ERP y sistemas internos.',
        'experience.kodigos.item7': 'Monitoreo y troubleshooting con Zabbix y Grafana, además de administración y personalización de GLPI.',
        'experience.kodigos.item8': 'Desarrollo y mantenimiento de herramientas internas con Python, Node.js, Express, APIs REST, PowerShell y plugins para GLPI.',
        'experience.kodigos.item9': 'Troubleshooting de redes, VPN, firewall, servidores, bases de datos, aplicaciones, impresión, videovigilancia y dispositivos de red.',
        'experience.kodigos.item10': 'Interfaz técnica con proveedores, consultorías y equipos externos, acompañando incidentes, implementaciones y cambios en infraestructura, conectividad, cloud y sistemas.',
        'experience.kodigos.item11': 'Participación en auditorías internas y externas, representando al área de TI en la entrega de evidencias, documentación y validaciones de controles y procesos tecnológicos.',
        'experience.kodigos.item12': 'Elaboración de documentación técnica, procedimientos, backups, planes de rollback y registros de cambios para apoyar la operación, continuidad y trazabilidad.',
        'experience.kodigos.stack': '<strong class="text-white/55">Stack:</strong> FortiGate • FortiClient • FortiSwitch • HPE Aruba • IPsec/SSL VPN • SD-WAN • VLAN • NAT • GCP • Windows Server • Linux • Zabbix • Grafana • GLPI • SQL Server • MariaDB • TOTVS Protheus • Python • Node.js • Express • PowerShell • REST APIs • CCTV • NVR • Zebra • Intelbras',
        'experience.tam.role': 'Analista de TI — Asignado a Bajaj do Brasil (Feb/2026 - Abr/2026)',
        'experience.tam.item1': 'Actuación en canal homologado TOTVS enfocado en soporte sistémico e infraestructura.',
        'experience.tam.item2': 'Administración de seguridad perimetral vía firewall FortiGate y gestión de activos de red.',
        'experience.tam.item3': 'Control de inventario, activos lógicos de TI e interfaz técnica con proveedores globales.',
        'contact.badge': 'Conexiones',
        'contact.title': 'Ponte en Contacto',
        'contact.whatsapp': 'WhatsApp',
        'contact.email': 'Correo',
        'contact.linkedin': 'LinkedIn',
        'footer.text': 'DISEÑADO Y DESARROLLADO POR JOEY OLIVEIRA'
    },
    en: {
        'meta.title': 'Joey Rickson | Infrastructure & Software Engineer',
        'meta.description': 'Professional portfolio of Joey Rickson Guimarães Oliveira. Specialist in infrastructure, software, cloud and Protheus ERP.',
        'nav.brand': 'Joey',
        'nav.about': 'About',
        'nav.specialties': 'Specialties',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'controls.theme': 'Theme',
        'controls.language': 'Language',
        'controls.themeButtonDark': 'White',
        'controls.themeButtonLight': 'Black',
        'hero.badge': 'Infrastructure • Development • ERP • Cloud • Data',
        'hero.description': 'Information Technology professional with solid experience in technical support, infrastructure and administration of corporate environments, acting strategically in hybrid and remote scenarios.',
        'hero.projectsButton': 'View Projects',
        'hero.cvButton': 'Download CV',
        'about.badge': 'The Profile',
        'about.title': 'About Me',
        'about.p1': 'I am an Information Technology professional focused on technical support, infrastructure and administration of corporate environments, with strong ability to operate in hybrid and remote operational scenarios. I have solid practical experience with essential market technologies, including Active Directory, GLPI, SQL Server, structured LAN/WAN networks, BI solutions such as Qlik Sense, Microsoft 365, VPN connections, pfSense firewalls, the TOTVS Protheus ERP ecosystem and security routines with Veeam Backup.',
        'about.p2': 'I work with a markedly analytical and collaborative profile, standing out for my strong ability to quickly solve complex problems and adapt quickly to new systems and methodologies, always keeping the main focus on operational stability and continuous improvement of internal processes.',
        'about.p3': 'Additionally, I have fundamental knowledge in web and mobile development applied practically in academic projects, actively participating in optimization initiatives, agile methodologies and support for the evolution of solutions and internal technology flows.',
        'about.timeline.0.title': 'IT Technician',
        'about.timeline.0.text': 'Corrective maintenance, structured local networks and basic hardware support.',
        'about.timeline.1.title': 'Support Analyst',
        'about.timeline.1.text': 'N2 technical support, ticket management through GLPI/ServiceNow and SLA agreement follow-up.',
        'about.timeline.2.title': 'Infrastructure Analyst',
        'about.timeline.2.text': 'Server management, privileges via Active Directory, firewall administration and LAN/WAN links.',
        'about.timeline.3.title': 'Protheus ERP Analyst',
        'about.timeline.3.text': 'Analysis of systemic inconsistencies, releases in the SIGACFG module, data extraction and tuning via SQL Server.',
        'about.timeline.4.title': 'Infrastructure & Software Engineer',
        'about.timeline.4.text': 'Complete orchestration combining clean code (Python), stable cloud environments and end-to-end operational improvement.',
        'specialties.badge': 'Core Expertise',
        'specialties.title': 'Specialties',
        'specialties.0.title': 'Infrastructure',
        'specialties.0.text': 'Management and architecture of server assets, Active Directory, security policies, Veeam Backup routines and hybrid corporate environments.',
        'specialties.1.title': 'Development',
        'specialties.1.text': 'Creation of robust Python scripts, GLPI-integrated solutions, agile methodologies and academic web/mobile fundamentals.',
        'specialties.2.title': 'Cloud & Servers',
        'specialties.2.text': 'Management of Linux virtual machines, provisioning in Google Cloud Platform (GCP), Microsoft 365 and TOTVS Cloud.',
        'specialties.3.title': 'Databases & BI',
        'specialties.3.text': 'Extraction and modeling of complex data with SQL Server and PostgreSQL structured for dashboards and BI reports (Qlik Sense).',
        'specialties.4.title': 'Protheus ERP',
        'specialties.4.text': 'Deep support for Backoffice modules, privilege control and complex global parameterizations via SIGACFG.',
        'specialties.5.title': 'Networks & Security',
        'specialties.5.text': 'Perimeter security configured through FortiGate and pfSense firewalls, stable VPN tunnels and LAN/WAN network management.',
        'projects.badge': 'Practical Innovation',
        'projects.title': 'Featured Projects',
        'projects.description': 'Personal products, automations and infrastructure solutions built to solve real problems, plus selected academic projects.',
        'projects.live': 'Open application',
        'projects.repo': 'GitHub repository',
        'projects.card5.tag': 'PWA & PERSONAL FINTECH',
        'projects.card5.date': 'SEP/2026',
        'projects.card5.title': 'SaldoPlan — Personal Finance & Payroll Simulator',
        'projects.card5.text': 'A PWA built to centralize salary, expenses, savings and monthly planning in one experience. It manages financial cycles, transactions, reserved funds and a payroll simulator with overtime, night shift premium, paid-rest calculations and deductions. It also supports offline use, data export/import and optional cloud backup.',
        'projects.card6.tag': 'MOBILE & PERSONAL PRODUCT',
        'projects.card6.date': 'SEP/2026',
        'projects.card6.title': 'Dose Certa — Medication Tracker',
        'projects.card6.text': 'A mobile application built with React Native and Expo to organize daily medication routines. It includes history and calendar views, configurable schedules, notes, local SQLite persistence, themes, notifications and Android alarm support, with real build and distribution workflows using EAS.',
        'projects.card7.tag': 'CLOUD, VPN & INFRASTRUCTURE',
        'projects.card7.date': 'AUG–SEP/2026',
        'projects.card7.title': 'GCP File Server + Site-to-Site VPN',
        'projects.card7.text': 'Deployment of a Windows File Server on Google Cloud for internal use, integrated with the on-premises network through a FortiGate site-to-site VPN. The project covered VPC design, routing, VLAN segmentation, SMB access, departmental shares, mapping scripts and connectivity validation. Sensitive network details were intentionally omitted.',
        'projects.card8.tag': 'AUTOMATION & INTERNAL APP',
        'projects.card8.date': 'SEP/2026',
        'projects.card8.title': 'Preventive Checklist — Internal Application',
        'projects.card8.text': 'Enhancement and deployment of an internal application used to execute and record preventive maintenance checklists. Work included authentication, REST API, version control, PDF signatures, visual identity, session inactivity handling, scheduled task operation, backup, update and rollback procedures.',
        'projects.card9.tag': 'ITSM & CUSTOMIZATION',
        'projects.card9.date': 'SEP/2026',
        'projects.card9.title': 'GLPI Plugin — Requester Context',
        'projects.card9.text': 'Development of a custom GLPI 10 plugin that adds a contextual panel with useful requester information such as location, group and role. The customization improves ticket triage and reduces manual lookups without modifying the platform core.',
        'projects.card10.tag': 'DEV TOOL & ERP',
        'projects.card10.date': 'SEP/2026',
        'projects.card10.title': 'SQL Generator Protheus',
        'projects.card10.text': 'A tool created to speed up SQL query building for the TOTVS Protheus ecosystem, reducing repetitive work during analysis, support and data investigation. The project turns hands-on ERP and database knowledge into a reusable tool publicly available on GitHub.',
        'projects.card11.tag': 'NETWORKING & SECURITY',
        'projects.card11.date': 'SEP/2026',
        'projects.card11.title': 'FortiGate — Connectivity, SD-WAN & VPNs',
        'projects.card11.text': 'Administration and evolution of corporate connectivity in a FortiGate environment with multiple Internet links. The work includes SD-WAN configuration and troubleshooting, VLANs, firewall policies, VPN creation and adjustments, routing, external administrative access, port and URL tests, traffic analysis and integration between local networks and cloud services. Addresses, rules and other sensitive information were omitted for security.',
        'projects.card1.tag': 'BIG DATA & INTEGRATION',
        'projects.card1.date': 'MAY/2026',
        'projects.card1.title': 'SAMAUMA — Commercial Credit Intelligence',
        'projects.card1.text': 'Presented at the Estácio Amazonas Project Showcase, SAMAUMA is an innovative platform for the Northern supply chain. It solves credit asymmetry by integrating traditional Big Data rules engines with exclusive local unstructured variables (such as severe river drought levels and fluvial logistics bottlenecks). The differentiator is risk isolation: distinguishing whether a supplier delay is financial default or geographic seasonal impact, promoting fair financial inclusion.',
        'projects.card2.tag': 'MOBILE & CORPORATE',
        'projects.card2.date': 'NOV/2024',
        'projects.card2.title': 'Cliente Seguro',
        'projects.card2.text': 'Developed for the partner company Hise Plast in the Mobile Devices Programming discipline (guided by Prof. Paulo Seixas), the application optimizes corporate credit management and risk control. It allows quick consultation via CNPJ, automated extraction and analysis of bill payments, protest history and direct calculation of default risk, operating in full technical compliance with LGPD.',
        'projects.card3.tag': 'DESKTOP SOFTWARE (OOP)',
        'projects.card3.date': 'FEB–MAY/2024',
        'projects.card3.title': 'EAAM — Escola Abastece Amazonas',
        'projects.card3.text': 'High-robustness desktop system developed under the object-oriented programming approach in Java, under the guidance of Prof. Isandra Augusta. The solution was designed end to end to solve real inventory management bottlenecks in local public institutions, optimizing the flow of registration, input, output and control of food supplies destined for school meals in a clean, auditable and secure way.',
        'projects.card4.tag': 'EXTENSION & EMBEDDED',
        'projects.card4.date': 'Extension Project',
        'projects.card4.title': 'Kit Plantinha IoT — Residential Monitoring',
        'projects.card4.text': 'An extension initiative focused on bringing complex electronic engineering skills to solve demands from the local community in Manaus. Specifically designed to mitigate the client’s digital familiarity barrier (Mrs. Raimunda da Silva), the architecture combined low-cost microcontrollers and sensor telemetry.',
        'experience.badge': 'History',
        'experience.title': 'Experience & Partnerships',
        'experience.partnerBadge': 'Strategic Partnership',
        'experience.amadev.role': 'Infrastructure Engineering, Servers & Core Database',
        'experience.amadev.text': 'Amadev (partner company led by Timóteo Bentes) is a software house focused on building innovative digital solutions by combining technology, design and strategy. We develop modern, functional and user-centered products, always with commitment, quality and closeness to the client. Our mission is to turn ideas into smart, scalable and high-impact digital experiences. Join us on this journey 🚀',
        'experience.amadev.sectionTitle': 'Role & Team Spirit:',
        'experience.amadev.sectionText': 'Combining forces through a strong culture of collaboration where each specialist leverages what they do best. Focused on the technical backbone, my role is to harden and optimize the ecosystem with server management and robust database administration, ensuring high performance, stability and shared growth so every idea can move forward without operational bottlenecks.',
        'experience.kodigos.role': 'IT Analyst (Apr/2026 - Present)',
        'experience.kodigos.summary': 'Multidisciplinary work across infrastructure, networking, security, enterprise systems, cloud, databases and internal solution development, supporting the continuity and evolution of the IT environment.',
        'experience.kodigos.sectionInfra': 'Infrastructure & Security',
        'experience.kodigos.sectionSystems': 'Systems & Data',
        'experience.kodigos.sectionOps': 'Operations & Governance',
        'experience.kodigos.item1': 'Administration of FortiGate, FortiClient, FortiSwitch and HPE Aruba, including creation, configuration and testing of IPsec/SSL VPNs, VLANs, SD-WAN, NAT, firewall policies, routing and network segmentation.',
        'experience.kodigos.item2': 'Configuration and validation of internal and external access, ports, URLs, published services and inter-network connectivity using TCP tests, curl, Test-NetConnection, ping, traceroute, packet sniffing and traffic analysis.',
        'experience.kodigos.item3': 'Administration of GCP, Windows Server and Linux environments, including File Server, shares, internal services, scheduled tasks and on-premises-to-cloud integration.',
        'experience.kodigos.item4': 'Support for corporate Wi-Fi, office and thermal printers, handheld devices and CCTV infrastructure, including IP cameras, NVRs and communication troubleshooting.',
        'experience.kodigos.item5': 'Support and troubleshooting of TOTVS Protheus, integrations, access issues, inconsistencies and cloud environments.',
        'experience.kodigos.item6': 'Work with SQL Server and MariaDB for queries, validations, audits and data analysis supporting ERP and internal systems.',
        'experience.kodigos.item7': 'Monitoring and troubleshooting with Zabbix and Grafana, plus GLPI administration and customization.',
        'experience.kodigos.item8': 'Development and maintenance of internal tools using Python, Node.js, Express, REST APIs, PowerShell and GLPI plugins.',
        'experience.kodigos.item9': 'Troubleshooting across networks, VPNs, firewalls, servers, databases, applications, printing, video surveillance and network devices.',
        'experience.kodigos.item10': 'Technical interface with vendors, consulting firms and external teams, supporting incidents, deployments and changes involving infrastructure, connectivity, cloud and enterprise systems.',
        'experience.kodigos.item11': 'Participation in internal and external audits, representing the IT department in the provision of evidence, documentation and validation of technology controls and processes.',
        'experience.kodigos.item12': 'Preparation of technical documentation, procedures, backups, rollback plans and change records to support operations, continuity and traceability.',
        'experience.kodigos.stack': '<strong class="text-white/55">Stack:</strong> FortiGate • FortiClient • FortiSwitch • HPE Aruba • IPsec/SSL VPN • SD-WAN • VLAN • NAT • GCP • Windows Server • Linux • Zabbix • Grafana • GLPI • SQL Server • MariaDB • TOTVS Protheus • Python • Node.js • Express • PowerShell • REST APIs • CCTV • NVR • Zebra • Intelbras',
        'experience.tam.role': 'IT Analyst — Assigned to Bajaj do Brasil (Feb/2026 - Apr/2026)',
        'experience.tam.item1': 'Work in a TOTVS certified channel focused on systemic support and infrastructure.',
        'experience.tam.item2': 'Administration of perimeter security via FortiGate firewall and network asset management.',
        'experience.tam.item3': 'Inventory control, logical IT assets and technical interface with global suppliers.',
        'contact.badge': 'Connections',
        'contact.title': 'Get in Touch',
        'contact.whatsapp': 'WhatsApp',
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'footer.text': 'DESIGNED & DEVELOPED BY JOEY OLIVEIRA'
    }
};

const titlesByLang = {
    pt: [
        'Engenheiro de Infraestrutura',
        'Desenvolvedor de Software',
        'Especialista em ERP',
        'Engenheiro de Cloud',
        'Analista de Banco de Dados'
    ],
    es: [
        'Ingeniero de Infraestructura',
        'Desarrollador de Software',
        'Especialista en ERP',
        'Ingeniero de Cloud',
        'Analista de Bases de Datos'
    ],
    en: [
        'Infrastructure Engineer',
        'Software Developer',
        'ERP Specialist',
        'Cloud Engineer',
        'Database Analyst'
    ]
};

const state = {
    lang: localStorage.getItem('portfolio-lang') || 'pt',
    theme: localStorage.getItem('portfolio-theme') || 'dark'
};

let currentIdx = 0;
const titleEl = document.getElementById('changingTitle');

function getText(key) {
    return translations[state.lang]?.[key] || translations.pt[key] || key;
}

function applyLanguage() {
    document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : state.lang === 'es' ? 'es' : 'en';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', getText('meta.description'));
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = getText('meta.title');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (key) el.textContent = getText(key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (key) el.innerHTML = getText(key);
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === state.lang);
    });

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.textContent = state.theme === 'dark' ? getText('controls.themeButtonLight') : getText('controls.themeButtonDark');
    }

    if (titleEl) {
        titleEl.textContent = titlesByLang[state.lang][currentIdx];
    }
}

function applyTheme() {
    document.body.classList.toggle('theme-light', state.theme === 'light');
    document.documentElement.classList.toggle('theme-light', state.theme === 'light');
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.textContent = state.theme === 'dark' ? getText('controls.themeButtonLight') : getText('controls.themeButtonDark');
    }
}

if (titleEl) {
    setInterval(() => {
        titleEl.style.opacity = 0;
        titleEl.style.transform = 'translateY(-5px)';

        setTimeout(() => {
            currentIdx = (currentIdx + 1) % titlesByLang[state.lang].length;
            titleEl.textContent = titlesByLang[state.lang][currentIdx];
            titleEl.style.opacity = 1;
            titleEl.style.transform = 'translateY(0)';
        }, 300);
    }, 3000);
}

const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            radius: Math.random() * 1.2 + 0.4
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = state.theme === 'dark' ? 'rgba(255, 255, 255, 0.18)' : 'rgba(17, 17, 17, 0.16)';

        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        state.lang = btn.dataset.lang;
        localStorage.setItem('portfolio-lang', state.lang);
        applyLanguage();
    });
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        });
    });
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('portfolio-theme', state.theme);
        applyTheme();
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
}

applyTheme();
applyLanguage();