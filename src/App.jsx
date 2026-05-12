import './index.css'

const tools = {
  design: [
    { name: 'Fg', color: '#ec4899' },   // Figma-like
    { name: 'Ps', color: '#1e3a8a' },   // Photoshop
    { name: 'Ai', color: '#7c2d12' },   // Illustrator
    { name: 'Pr', color: '#581c87' },   // Premiere
    { name: 'N',  color: '#000000' },   // Notion
    { name: 'C',  color: '#facc15' },   // Camera
  ],
  nocode: [
    { name: 'Fr', color: '#ef4444' },   // Framer
    { name: 'W',  color: '#2563eb' },   // Webflow
    { name: 'Tw', color: '#3b82f6' },   // Twitter/X
    { name: 'Wp', color: '#1e3a8a' },   // WordPress
  ],
  ai: [
    { name: 'GPT', color: '#10a37f' },
    { name: 'Gm',  color: '#a855f7' },
    { name: 'M',   color: '#6b7280' },
  ],
}

function ToolGroup({ label, items }) {
  return (
    <div className="tools-group">
      <div className="tools-label">{label}</div>
      <div className="tools-icons">
        {items.map((t, i) => (
          <div key={i} className="tool-icon" style={{ background: t.color }}>
            {t.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      {/* Top: profile + languages */}
      <div className="top-row">
        <div className="profile-card">
          <img
            className="avatar"
            src="https://i.ibb.co/DFjmK7G/myportret.png"
            alt="Karthik SR"
          />
          <div className="profile-info">
            <div className="hello">Привет 👋 Я</div>
            <h1>Алина Гуменюк</h1>
            <div className="role">Frontend developer / Designer</div>
          </div>
        </div>

        <div className="languages-card">
          <h2>Языки</h2>
          <div className="lang-row">
            <span>Русский</span>
            <div className="lang-bar"><div className="lang-fill" style={{ width: '95%' }} /></div>
          </div>
          <div className="lang-row">
            <span>Английский</span>
            <div className="lang-bar"><div className="lang-fill" style={{ width: '90%' }} /></div>
          </div>
          <div className="lang-row">
            <span>Казахский</span>
            <div className="lang-bar"><div className="lang-fill" style={{ width: '60%' }} /></div>
          </div>
        </div>
      </div>

      {/* Middle: experience + tools */}
      <div className="middle-row">
        <div className="experience-card">
          <h2>Опыт</h2>

          <div className="exp-item highlight">
            <div>
              <div className="exp-date">Сентябрь 2023 – Настоящее</div>
              <div className="exp-title">Frontend-разработчик</div>
            </div>
            <ul className="exp-list">
              <li>Участвовала в разработке стратегии и планировании digital-кампаний, создавала интерфейсы, генерирующие реальный трафик.</li>
              <li>Верстала страницы для блогов, веб-сайтов и соцсетей с учетом требований поисковой выдачи.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div>
              <div className="exp-date">2024 – Настоящее</div>
              <div className="exp-title">Веб-дизайнер</div>
            </div>
            <ul className="exp-list">
              <li>Разработка внутренних проектов «с нуля», участие в продуктовом дизайне брендов.</li>
              <li>Создание landing page, webapps и hybrid apps</li>
              <li>Координация с внешними агентствами, художественными службами, веб-дизайнерами, маркетингом, печатными службами и коллегами по мере необходимости.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div>
              <div className="exp-date">Июнь 2025 – Настоящее</div>
              <div className="exp-title">Проектный менеджер</div>
              
            </div>
            <ul className="exp-list">
              <li>Управление разработкой внутренних проектов «с нуля», участие в продуктовом дизайне брендов.</li>
              <li>Координация создания лендингов, веб-приложений и гибридных приложений.</li>
              <li>Настройка коммуникаций между внешними агентствами, арт-службами, веб-дизайнерами, маркетологами, типографиями и внутренней командой разработки.</li>
            </ul>
          </div>
        </div>

        <div className="tools-card">
          <h2>Приложения</h2>
          <ToolGroup label="Дизайн" items={tools.design} />
          <ToolGroup label="no-code" items={tools.nocode} />
          <ToolGroup label="Искусственный интеллект" items={tools.ai} />
        </div>
      </div>

      {/* Bottom: education + interests */}
      <div className="bottom-row">
        <div className="education-card">
          <h2>Образование</h2>
          <div className="edu-grid">
            <div className="edu-item highlight">
              <div className="edu-year">2024 <span>♥</span></div>
              <div className="edu-title">UI/UX</div>
              <div className="edu-tags">
                #UX #UI #research<br />
                #DesignSystem #UI<br />
                #wireframing #figma<br />
                #ux
              </div>
              <div className="edu-school">Самообучение</div>
            </div>

            <div className="edu-item">
              <div className="edu-year">2017 – 2022</div>
              <div className="edu-title">Law</div>
              <div className="edu-tags">
                #law #legalStudies<br />
                #contracts<br />
                #internationalLaws
              </div>
              <div className="edu-school">University of Kerala</div>
            </div>

            <div className="edu-item" style={{ gridColumn: 'span 2' }}>
              <div className="edu-year">2017</div>
              <div className="edu-title">Graphic design</div>
              <div className="edu-tags">
                #branding #web #illustration #adobe
              </div>
              <div className="edu-school">Coursera</div>
            </div>
          </div>
        </div>

        <div>
          <div className="interests-card">
            <h2>Интересы</h2>
            <div className="tags">
              {['Брендинг', 'Дизайн', 'Фотографии', 'Искусственый интелект', 'Путешествия'
              , 'типография', 'Социальные сети', 'Поиск', 'Игры'].map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <h3>Let's chat! I'm ready to work on excinting projects</h3>
            <p>alinagumenyuk07@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
