// База данных (localStorage) - ОБНОВЛЕННАЯ ВЕРСИЯ
class Database {
    constructor() {
        this.usersKey = 'mediahub_users';
        this.currentUserKey = 'mediahub_current_user';
        this.postsKey = 'mediahub_posts';
        this.friendshipsKey = 'mediahub_friendships';
        this.eventsKey = 'mediahub_events';
        this.forumTopicsKey = 'mediahub_forum_topics';
        this.communitiesKey = 'mediahub_communities';
        this.forumRepliesKey = 'mediahub_forum_replies';
        this.communityPostsKey = 'mediahub_community_posts';
        this.newsKey = 'mediahub_news';
        this.init();
    }

    init() {
        // Инициализация начальных данных
        if (!localStorage.getItem(this.usersKey)) {
            const defaultUsers = [
                {
                    id: 1,
                    email: 'nikita@ulstu.ru',
                    password: '123456',
                    firstName: 'Никита',
                    lastName: 'Еремеев',
                    faculty: 'ИСТ',
                    facultyName: 'Информационных систем и технологий',
                    course: '3',
                    about: 'Студент 3 курса факультета ИСТ. Увлекаюсь программированием и робототехникой. Люблю участвовать в хакатонах.',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nikita',
                    subscribers: [2, 3, 4, 5, 6],
                    subscriptions: [2, 3, 7],
                    communities: [1, 2],
                    createdAt: new Date('2024-09-01').toISOString()
                },
                {
                    id: 2,
                    email: 'alexander@ulstu.ru',
                    password: '123456',
                    firstName: 'Александр',
                    lastName: 'Сазонов',
                    faculty: 'РТФ',
                    facultyName: 'Радиотехнический факультет',
                    course: '2',
                    about: 'Студент радиотехнического факультета. Занимаюсь радиолюбительством, увлекаюсь музыкой и спортом.',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexander',
                    subscribers: [1, 3, 8],
                    subscriptions: [1, 3, 9],
                    communities: [2, 3],
                    createdAt: new Date('2024-09-01').toISOString()
                },
                {
                    id: 3,
                    email: 'student@ulstu.ru',
                    password: '123456',
                    firstName: 'Студент',
                    lastName: 'Тестовый',
                    faculty: 'МСФ',
                    facultyName: 'Машиностроительный факультет',
                    course: '4',
                    about: 'Старшекурсник машиностроительного факультета. Активно участвую в научной работе, пишу диплом.',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=student3',
                    subscribers: [1, 2, 10],
                    subscriptions: [2, 4],
                    communities: [1],
                    createdAt: new Date('2024-09-01').toISOString()
                }
            ];
            
            // Добавляем 50 новых пользователей
            const additionalUsers = this.generateAdditionalUsers(50);
            defaultUsers.push(...additionalUsers);
            
            localStorage.setItem(this.usersKey, JSON.stringify(defaultUsers));
        }

        if (!localStorage.getItem(this.postsKey)) {
            const defaultPosts = [
                {
                    id: 1,
                    userId: 1,
                    content: 'Привет всем! Только что зарегистрировался на платформе. Кто тоже с факультета ИСТ?',
                    createdAt: new Date('2025-03-15').toISOString(),
                    likes: [2, 3, 4, 5, 6, 7],
                    comments: [
                        { id: 1, userId: 2, text: 'Привет! Я с РТФ, но тоже интересуюсь программированием!', createdAt: new Date('2025-03-15').toISOString() },
                        { id: 2, userId: 3, text: 'Добро пожаловать! МСФ тут тоже есть :)', createdAt: new Date('2025-03-15').toISOString() },
                        { id: 3, userId: 4, text: 'ИСТ 2 курс, приветствую!', createdAt: new Date('2025-03-16').toISOString() }
                    ]
                },
                {
                    id: 2,
                    userId: 2,
                    content: 'Завтра интересная лекция по радиотехнике в 14:00, ауд. 310. Кто идет?',
                    createdAt: new Date('2025-03-20').toISOString(),
                    likes: [1, 3, 8, 9],
                    comments: [
                        { id: 1, userId: 1, text: 'Я обязательно буду!', createdAt: new Date('2025-03-20').toISOString() },
                        { id: 2, userId: 3, text: 'Приду, если освобожусь от пар', createdAt: new Date('2025-03-20').toISOString() }
                    ]
                },
                {
                    id: 3,
                    userId: 3,
                    content: 'Ищем участников для проекта по робототехнике. Если есть опыт с Arduino - пишите!',
                    createdAt: new Date('2025-03-25').toISOString(),
                    likes: [1, 2, 4, 5, 6],
                    comments: [
                        { id: 1, userId: 1, text: 'У меня есть опыт! Пиши в личку', createdAt: new Date('2025-03-25').toISOString() },
                        { id: 2, userId: 2, text: 'Интересно! Какая тема проекта?', createdAt: new Date('2025-03-25').toISOString() }
                    ]
                }
            ];
            
            // Добавляем дополнительные посты
            const additionalPosts = this.generateAdditionalPosts(20);
            defaultPosts.push(...additionalPosts);
            
            localStorage.setItem(this.postsKey, JSON.stringify(defaultPosts));
        }

        if (!localStorage.getItem(this.friendshipsKey)) {
            const defaultFriendships = [
                { id: 1, userId: 1, friendId: 2, status: 'accepted' },
                { id: 2, userId: 1, friendId: 3, status: 'accepted' },
                { id: 3, userId: 2, friendId: 3, status: 'accepted' },
                { id: 4, userId: 1, friendId: 4, status: 'accepted' },
                { id: 5, userId: 2, friendId: 5, status: 'accepted' },
                { id: 6, userId: 3, friendId: 6, status: 'accepted' }
            ];
            
            // Добавляем дополнительные дружеские связи
            const additionalFriendships = this.generateAdditionalFriendships(30);
            defaultFriendships.push(...additionalFriendships);
            
            localStorage.setItem(this.friendshipsKey, JSON.stringify(defaultFriendships));
        }

        if (!localStorage.getItem(this.eventsKey)) {
            const defaultEvents = [
                {
                    id: 1,
                    title: 'День открытых дверей УлГТУ',
                    description: 'Приглашаем абитуриентов и их родителей на День открытых дверей. Вы сможете познакомиться с факультетами, пообщаться с преподавателями и студентами.',
                    date: '2025-03-25',
                    time: '10:00',
                    location: 'Главный корпус, ауд. 100',
                    organizer: 'Приемная комиссия',
                    category: 'Общее',
                    participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    maxParticipants: 100,
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2022-03/ulstu_4.jpg'
                },
                {
                    id: 2,
                    title: 'Хакатон "WebTech 2025"',
                    description: 'Ежегодный студенческий хакатон по веб-разработке. Призы для победителей, возможность получить стажировку в IT-компаниях.',
                    date: '2025-04-05',
                    time: '09:00',
                    location: 'IT-коворкинг, 4 корпус',
                    organizer: 'IT-клуб УлГТУ',
                    category: 'IT',
                    participants: [1, 3, 4, 5, 6, 7],
                    maxParticipants: 50,
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-10/hakaton.jpg'
                },
                {
                    id: 3,
                    title: 'Лекция "Искусственный интеллект в современном мире"',
                    description: 'Приглашенный специалист из Яндекс расскажет о современных тенденциях в области искусственного интеллекта и машинного обучения.',
                    date: '2025-03-28',
                    time: '14:00',
                    location: 'Ауд. 310, Главный корпус',
                    organizer: 'Кафедра ИСТ',
                    category: 'Наука',
                    participants: [1, 2, 3, 8, 9, 10],
                    maxParticipants: 80,
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2020-11/ai_lecture.jpg'
                }
            ];
            
            // Добавляем дополнительные мероприятия
            const additionalEvents = this.generateAdditionalEvents(10);
            defaultEvents.push(...additionalEvents);
            
            localStorage.setItem(this.eventsKey, JSON.stringify(defaultEvents));
        }

        if (!localStorage.getItem(this.newsKey)) {
            const defaultNews = [
                {
                    id: 1,
                    title: 'Открытие нового STEM-центра',
                    description: 'В УлГТУ открылся современный STEM-центр для школьников и студентов. Центр оборудован по последнему слову техники.',
                    content: 'На прошлой неделе в нашем университете состоялось торжественное открытие нового STEM-центра. Центр оснащен современным оборудованием для занятий робототехникой, 3D-моделированием и программированием.',
                    date: '2025-03-25',
                    category: 'Образование',
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2022-03/stem_center.jpg',
                    views: 1250,
                    author: 'Пресс-служба УлГТУ'
                },
                {
                    id: 2,
                    title: 'Студенты УлГТУ победили в олимпиаде',
                    description: 'Команда студентов факультета ИСТ заняла первое место во всероссийской олимпиаде по программированию.',
                    content: 'Команда студентов факультета информационных систем и технологий в составе трех человек завоевала первое место на всероссийской олимпиаде по программированию, которая проходила в Москве.',
                    date: '2025-03-20',
                    category: 'Достижения',
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-10/olimpiada.jpg',
                    views: 980,
                    author: 'Кафедра ИСТ'
                }
            ];
            
            // Добавляем 10 новостей с датами от 20 ноября до 10 декабря 2025
            const additionalNews = this.generateAdditionalNews(10);
            defaultNews.push(...additionalNews);
            
            localStorage.setItem(this.newsKey, JSON.stringify(defaultNews));
        }

        if (!localStorage.getItem(this.forumTopicsKey)) {
            const defaultTopics = [
                {
                    id: 1,
                    title: 'Обмен учебниками и конспектами',
                    description: 'Давайте делиться учебными материалами! Кто какие учебники и конспекты может предложить для обмена?',
                    category: 'Учеба',
                    authorId: 1,
                    createdAt: new Date('2025-03-10').toISOString(),
                    lastActivity: new Date('2025-03-24').toISOString(),
                    posts: 24,
                    views: 156,
                    isPinned: true
                },
                {
                    id: 2,
                    title: 'Помощь с программированием',
                    description: 'Задавайте вопросы по программированию, поможем разобраться! C++, Python, Java, JavaScript - обращайтесь!',
                    category: 'IT',
                    authorId: 2,
                    createdAt: new Date('2025-03-12').toISOString(),
                    lastActivity: new Date('2025-03-23').toISOString(),
                    posts: 47,
                    views: 289,
                    isPinned: true
                },
                {
                    id: 3,
                    title: 'Вакансии и стажировки для студентов',
                    description: 'Актуальные вакансии и стажировки для студентов УлГТУ. Делитесь информацией о возможностях!',
                    category: 'Карьера',
                    authorId: 3,
                    createdAt: new Date('2025-03-15').toISOString(),
                    lastActivity: new Date('2025-03-22').toISOString(),
                    posts: 31,
                    views: 187,
                    isPinned: false
                }
            ];
            localStorage.setItem(this.forumTopicsKey, JSON.stringify(defaultTopics));
        }

        if (!localStorage.getItem(this.communitiesKey)) {
            const defaultCommunities = [
                {
                    id: 1,
                    name: 'IT-клуб УлГТУ',
                    description: 'Сообщество для всех, кто интересуется информационными технологиями. Хакатоны, лекции, проекты. Присоединяйтесь к нам!',
                    category: 'Технологии',
                    members: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    moderators: [1, 4],
                    createdAt: new Date('2025-01-15').toISOString(),
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-10/it_club.jpg',
                    coverImage: 'https://ulstu.ru/sites/default/files/styles/1920x600/public/2021-10/it_cover.jpg',
                    rules: '1. Уважительное общение\n2. Запрет спама и рекламы\n3. Совместная работа над проектами\n4. Помощь новичкам\n5. Активное участие в мероприятиях'
                },
                {
                    id: 2,
                    name: 'Спортивный клуб "Политехник"',
                    description: 'Тренировки, соревнования, здоровый образ жизни. У нас есть секции по волейболу, баскетболу, футболу и другим видам спорта.',
                    category: 'Спорт',
                    members: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12],
                    moderators: [2, 5],
                    createdAt: new Date('2025-02-01').toISOString(),
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-09/sport.jpg',
                    coverImage: 'https://ulstu.ru/sites/default/files/styles/1920x600/public/2021-09/sport_cover.jpg',
                    rules: '1. Регулярное посещение тренировок\n2. Спортивное поведение\n3. Взаимопомощь\n4. Участие в соревнованиях\n5. Поддержание спортивной формы'
                },
                {
                    id: 3,
                    name: 'Научное студенческое общество',
                    description: 'Для тех, кто занимается научной работой. Конференции, публикации, гранты. Развиваем научный потенциал студентов!',
                    category: 'Наука',
                    members: [1, 3, 4, 6, 8, 10, 12, 14, 16, 18],
                    moderators: [3, 6],
                    createdAt: new Date('2025-01-20').toISOString(),
                    image: 'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2022-02/science.jpg',
                    coverImage: 'https://ulstu.ru/sites/default/files/styles/1920x600/public/2022-02/science_cover.jpg',
                    rules: '1. Научная этика\n2. Взаимное рецензирование работ\n3. Участие в конференциях\n4. Помощь в подготовке публикаций\n5. Совместные исследовательские проекты'
                }
            ];
            localStorage.setItem(this.communitiesKey, JSON.stringify(defaultCommunities));
        }

        if (!localStorage.getItem(this.forumRepliesKey)) {
            const defaultReplies = [
                {
                    id: 1,
                    topicId: 1,
                    userId: 2,
                    content: 'У меня есть учебник по высшей математике за 1-2 курс в отличном состоянии. Могу обменять на учебник по физике.',
                    createdAt: new Date('2025-03-11').toISOString(),
                    likes: 3
                },
                {
                    id: 2,
                    topicId: 1,
                    userId: 3,
                    content: 'Ищу конспекты по теоретической механике. Есть учебники по сопротивлению материалов для обмена.',
                    createdAt: new Date('2025-03-12').toISOString(),
                    likes: 1
                },
                {
                    id: 3,
                    topicId: 2,
                    userId: 1,
                    content: 'Помогите с задачкой на Python: нужно написать функцию для сортировки списка словарей по значению ключа.',
                    createdAt: new Date('2025-03-13').toISOString(),
                    likes: 2
                }
            ];
            localStorage.setItem(this.forumRepliesKey, JSON.stringify(defaultReplies));
        }

        if (!localStorage.getItem(this.communityPostsKey)) {
            const defaultCommunityPosts = [
                {
                    id: 1,
                    communityId: 1,
                    userId: 1,
                    content: 'На этой неделе планируем провести воркшоп по React. Кто хочет присоединиться?',
                    createdAt: new Date('2025-03-20').toISOString(),
                    likes: [2, 3, 4, 5]
                },
                {
                    id: 2,
                    communityId: 2,
                    userId: 3,
                    content: 'В субботу тренировка по волейболу в 10:00. Приходите все желающие!',
                    createdAt: new Date('2025-03-22').toISOString(),
                    likes: [2, 5, 6]
                }
            ];
            localStorage.setItem(this.communityPostsKey, JSON.stringify(defaultCommunityPosts));
        }
    }

    // Метод для генерации 50 дополнительных пользователей
    generateAdditionalUsers(count) {
        const firstNames = [
            'Алексей', 'Дмитрий', 'Максим', 'Артем', 'Иван', 'Михаил', 'Сергей', 'Андрей', 'Павел', 'Егор',
            'Владимир', 'Константин', 'Роман', 'Олег', 'Кирилл', 'Глеб', 'Тимур', 'Даниил', 'Евгений', 'Станислав',
            'Анна', 'Мария', 'Екатерина', 'Дарья', 'Анастасия', 'Виктория', 'Елена', 'Ирина', 'Ольга', 'Татьяна',
            'Юлия', 'Алина', 'Ксения', 'Полина', 'София', 'Валерия', 'Александра', 'Ульяна', 'Маргарита', 'Наталья'
        ];
        
        const lastNames = [
            'Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Лебедев', 'Козлов', 'Новиков', 'Морозов',
            'Волков', 'Соловьев', 'Васильев', 'Зайцев', 'Павлов', 'Семенов', 'Голубев', 'Виноградов', 'Богданов', 'Воробьев',
            'Федоров', 'Михайлов', 'Беляев', 'Тарасов', 'Белов', 'Комаров', 'Орлов', 'Киселев', 'Макаров', 'Андреев',
            'Ковалев', 'Ильин', 'Гусев', 'Титов', 'Кузьмин', 'Кудрявцев', 'Баранов', 'Куликов', 'Алексеев', 'Степанов'
        ];
        
        const faculties = ['ИСТ', 'РТФ', 'МСФ', 'СФ', 'ЭФ'];
        const facultyNames = {
            'ИСТ': 'Информационных систем и технологий',
            'РТФ': 'Радиотехнический факультет',
            'МСФ': 'Машиностроительный факультет',
            'СФ': 'Строительный факультет',
            'ЭФ': 'Энергетический факультет'
        };
        
        const courses = ['1', '2', '3', '4', '5'];
        const aboutTexts = [
            'Студент, увлекаюсь программированием и технологиями.',
            'Люблю спорт и активный образ жизни.',
            'Занимаюсь научной работой, интересуюсь исследованиями.',
            'Участвую в студенческих мероприятиях и волонтерстве.',
            'Изучаю иностранные языки и культуру других стран.',
            'Мечтаю стать профессионалом в своей области.',
            'Ценю общение и новые знакомства.',
            'Стремлюсь к саморазвитию и получению новых знаний.',
            'Люблю музыку и творчество.',
            'Активно участвую в жизни университета.'
        ];
        
        const users = [];
        const startId = 4; // Начинаем с ID 4, так как 1-3 уже есть
        
        for (let i = 0; i < count; i++) {
            const id = startId + i;
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            const faculty = faculties[Math.floor(Math.random() * faculties.length)];
            const course = courses[Math.floor(Math.random() * courses.length)];
            const about = aboutTexts[Math.floor(Math.random() * aboutTexts.length)];
            
            // Генерируем случайное количество подписчиков и подписок
            const subscribers = [];
            const subscriptions = [];
            const communities = [];
            
            // 20% шанс быть в каждом сообществе
            if (Math.random() < 0.2) communities.push(1);
            if (Math.random() < 0.2) communities.push(2);
            if (Math.random() < 0.2) communities.push(3);
            
            users.push({
                id: id,
                email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${id}@ulstu.ru`,
                password: '123456',
                firstName: firstName,
                lastName: lastName,
                faculty: faculty,
                facultyName: facultyNames[faculty] || faculty,
                course: course,
                about: about,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}${lastName}${id}`,
                subscribers: subscribers,
                subscriptions: subscriptions,
                communities: communities,
                createdAt: new Date(2024, 8, Math.floor(Math.random() * 30) + 1).toISOString() // Сентябрь 2024
            });
        }
        
        return users;
    }

    // Метод для генерации дополнительных постов
    generateAdditionalPosts(count) {
        const posts = [];
        const contentTemplates = [
            'Сегодня отличный день для учебы! Кто со мной в библиотеке?',
            'Только что сдал сложный проект! Ощущение невероятное!',
            'Ищу напарника для проекта по веб-разработке. Пишите в личку!',
            'Кто идет на концерт в пятницу? Есть лишний билет!',
            'Поделитесь, пожалуйста, конспектами по высшей математике!',
            'Наш факультет выиграл спортивные соревнования! Ура!',
            'Завтра дедлайн по курсовой, а я только начал...',
            'Кто разбирается в Python? Нужна помощь с задачей!',
            'Лучшие места для учебы в университете? Ваши рекомендации?',
            'Как совмещать учебу, работу и личную жизнь? Делитесь опытом!'
        ];
        
        const startId = 4;
        
        for (let i = 0; i < count; i++) {
            const id = startId + i;
            const userId = Math.floor(Math.random() * 50) + 1; // Случайный пользователь из 50
            const content = contentTemplates[Math.floor(Math.random() * contentTemplates.length)];
            const likesCount = Math.floor(Math.random() * 20);
            const likes = [];
            
            // Генерируем случайные лайки
            for (let j = 0; j < likesCount; j++) {
                const likeUserId = Math.floor(Math.random() * 50) + 1;
                if (!likes.includes(likeUserId)) {
                    likes.push(likeUserId);
                }
            }
            
            // Генерируем случайные комментарии
            const comments = [];
            const commentsCount = Math.floor(Math.random() * 5);
            for (let j = 0; j < commentsCount; j++) {
                const commentUserId = Math.floor(Math.random() * 50) + 1;
                const commentTexts = [
                    'Отличный пост!',
                    'Согласен с тобой!',
                    'Интересная мысль!',
                    'Поделюсь своим опытом...',
                    'Удачи в начинаниях!'
                ];
                comments.push({
                    id: j + 1,
                    userId: commentUserId,
                    text: commentTexts[Math.floor(Math.random() * commentTexts.length)],
                    createdAt: new Date(2025, 2, Math.floor(Math.random() * 10) + 15).toISOString() // Март 2025
                });
            }
            
            posts.push({
                id: id,
                userId: userId,
                content: content,
                createdAt: new Date(2025, 2, Math.floor(Math.random() * 10) + 15).toISOString(), // Март 2025
                likes: likes,
                comments: comments
            });
        }
        
        return posts;
    }

    // Метод для генерации дополнительных дружеских связей
    generateAdditionalFriendships(count) {
        const friendships = [];
        const startId = 7; // Начинаем с ID 7, так как 1-6 уже есть
        
        for (let i = 0; i < count; i++) {
            const id = startId + i;
            const userId = Math.floor(Math.random() * 50) + 1;
            let friendId;
            
            // Убедимся, что friendId не равен userId
            do {
                friendId = Math.floor(Math.random() * 50) + 1;
            } while (friendId === userId);
            
            const statuses = ['accepted', 'pending'];
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            
            friendships.push({
                id: id,
                userId: userId,
                friendId: friendId,
                status: status
            });
        }
        
        return friendships;
    }

    // Метод для генерации дополнительных мероприятий
    generateAdditionalEvents(count) {
        const events = [];
        const titles = [
            'Мастер-класс по публичным выступлениям',
            'Семинар по финансовой грамотности',
            'Турнир по шахматам',
            'Воркшоп по дизайну интерфейсов',
            'Конференция молодых ученых',
            'Квест по кампусу',
            'Ярмарка вакансий',
            'Кинопоказ и обсуждение',
            'Тренинг по тайм-менеджменту',
            'Выставка студенческих проектов'
        ];
        
        const descriptions = [
            'Научитесь уверенно выступать перед аудиторией',
            'Узнайте, как правильно управлять личными финансами',
            'Проверьте свои навыки в интеллектуальной игре',
            'Освойте основы UI/UX дизайна',
            'Представьте свои исследования и получите обратную связь',
            'Пройдите интересный маршрут по территории университета',
            'Познакомьтесь с потенциальными работодателями',
            'Посмотрите и обсудите актуальное кино',
            'Научитесь эффективно планировать свое время',
            'Посмотрите лучшие работы студентов разных факультетов'
        ];
        
        const categories = ['Образование', 'Карьера', 'Спорт', 'Культура', 'Наука'];
        const locations = ['Главный корпус', 'Библиотека', 'Актовый зал', 'Спортзал', 'IT-коворкинг'];
        
        const startId = 4;
        
        for (let i = 0; i < count; i++) {
            const id = startId + i;
            const month = Math.floor(Math.random() * 2) + 4; // Апрель-май
            const day = Math.floor(Math.random() * 30) + 1;
            
            events.push({
                id: id,
                title: titles[Math.floor(Math.random() * titles.length)],
                description: descriptions[Math.floor(Math.random() * descriptions.length)],
                date: `2025-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
                time: `${Math.floor(Math.random() * 8) + 9}:00`,
                location: locations[Math.floor(Math.random() * locations.length)],
                organizer: 'Студенческий совет',
                category: categories[Math.floor(Math.random() * categories.length)],
                participants: [],
                maxParticipants: Math.floor(Math.random() * 50) + 30,
                image: `https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-10/event_${Math.floor(Math.random() * 5) + 1}.jpg`
            });
        }
        
        return events;
    }

    // Метод для генерации 10 новостей с датами от 20 ноября до 10 декабря 2025
    generateAdditionalNews(count) {
        const news = [];
        const newsTemplates = [
            {
                title: 'Запуск новой образовательной программы',
                description: 'УлГТУ запускает совместную магистерскую программу с ведущими IT-компаниями региона.',
                content: 'В рамках развития сотрудничества с IT-индустрией, УлГТУ запускает новую магистерскую программу "Цифровые технологии в промышленности". Программа разработана совместно с ведущими IT-компаниями региона и включает практические модули на предприятиях-партнерах.',
                category: 'Образование'
            },
            {
                title: 'Реконструкция спортивного комплекса',
                description: 'Началась масштабная реконструкция университетского спортивного комплекса.',
                content: 'В рамках программы развития спортивной инфраструктуры началась реконструкция спортивного комплекса УлГТУ. Планируется обновление беговых дорожек, футбольного поля и строительство нового бассейна. Работы завершатся к началу нового учебного года.',
                category: 'Спорт'
            },
            {
                title: 'Студенческая научная конференция',
                description: 'Более 200 студентов представили свои исследования на ежегодной конференции.',
                content: 'В УлГТУ прошла ежегодная студенческая научная конференция, в которой приняли участие более 200 студентов со всех факультетов. Лучшие работы будут опубликованы в сборнике научных трудов университета.',
                category: 'Наука'
            },
            {
                title: 'Внедрение системы электронных зачеток',
                description: 'С нового семестра все студенты перейдут на электронные зачетные книжки.',
                content: 'Для повышения эффективности учебного процесса с нового семестра в УлГТУ будет внедрена система электронных зачетных книжек. Студенты смогут отслеживать свои оценки и успеваемость через мобильное приложение.',
                category: 'Технологии'
            },
            {
                title: 'Открытие языкового центра',
                description: 'В университете открылся современный центр изучения иностранных языков.',
                content: 'Современный языковой центр оснащен мультимедийным оборудованием и предоставляет возможность изучения 10 иностранных языков. Центр будет работать как для студентов, так и для сотрудников университета.',
                category: 'Образование'
            },
            {
                title: 'Студенты-волонтеры помогли городу',
                description: 'Более 500 студентов приняли участие в экологическом субботнике.',
                content: 'Студенты УлГТУ организовали масштабный экологический субботник в парках города. За один день было собрано более 2 тонн мусора и высажено 100 новых деревьев.',
                category: 'Общественная жизнь'
            },
            {
                title: 'Новые лаборатории для инженеров',
                description: 'Факультет МСФ получил современное оборудование для практических занятий.',
                content: 'Благодаря гранту министерства образования, машиностроительный факультет получил новое оборудование для лабораторий: 3D-принтеры, станки с ЧПУ и измерительные приборы последнего поколения.',
                category: 'Оборудование'
            },
            {
                title: 'Сотрудничество с зарубежным вузом',
                description: 'УлГТУ подписал соглашение о сотрудничестве с университетом Германии.',
                content: 'Подписано соглашение о двойных дипломах и академическом обмене с Техническим университетом Дрездена. Первый обмен студентами состоится уже в следующем семестре.',
                category: 'Международное сотрудничество'
            },
            {
                title: 'Фестиваль студенческого творчества',
                description: 'В университете прошел ежегодный фестиваль талантов "Студенческая весна".',
                content: 'Более 300 студентов представили свои творческие номера на фестивале "Студенческая весна". В программе были танцы, вокал, театральные постановки и художественные выставки.',
                category: 'Культура'
            },
            {
                title: 'IT-хакатон для школьников',
                description: 'УлГТУ провел хакатон по программированию для старшеклассников.',
                content: 'Более 100 школьников из разных городов региона приняли участие в хакатоне по веб-разработке. Победители получили дополнительные баллы при поступлении в УлГТУ.',
                category: 'Профориентация'
            }
        ];
        
        const images = [
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2022-03/education.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-09/sport_complex.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2022-02/science_conf.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-10/tech.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2020-11/language.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-09/volunteers.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2022-03/labs.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-10/international.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2022-02/festival.jpg',
            'https://ulstu.ru/sites/default/files/styles/700x430/public/news/2021-10/hackathon_school.jpg'
        ];
        
        const startId = 3;
        const startDate = new Date(2025, 10, 20); // 20 ноября 2025
        const endDate = new Date(2025, 11, 10); // 10 декабря 2025
        
        for (let i = 0; i < count; i++) {
            const id = startId + i;
            const template = newsTemplates[i % newsTemplates.length];
            const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
            const dateStr = date.toISOString().split('T')[0];
            
            news.push({
                id: id,
                title: template.title,
                description: template.description,
                content: template.content,
                date: dateStr,
                category: template.category,
                image: images[i % images.length],
                views: Math.floor(Math.random() * 1000) + 500,
                author: 'Пресс-служба УлГТУ'
            });
        }
        
        return news;
    }

    // Новости
    getNews() {
        return JSON.parse(localStorage.getItem(this.newsKey)) || [];
    }

    getRecentNews(limit = 10) {
        const news = this.getNews();
        return news
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, limit);
    }

    getNewsByDateRange(startDate, endDate) {
        const news = this.getNews();
        return news.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
        });
    }

    // Пользователи
    getUsers() {
        return JSON.parse(localStorage.getItem(this.usersKey)) || [];
    }

    getUserById(id) {
        return this.getUsers().find(user => user.id === id);
    }

    getUserByEmail(email) {
        return this.getUsers().find(user => user.email === email);
    }

    searchUsers(query) {
        const users = this.getUsers();
        const searchTerms = query.toLowerCase().split(' ');
        return users.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            const faculty = (user.facultyName || user.faculty).toLowerCase();
            return searchTerms.some(term => 
                fullName.includes(term) || 
                faculty.includes(term) ||
                user.email.toLowerCase().includes(term)
            );
        });
    }

    createUser(userData) {
        const users = this.getUsers();
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        
        const newUser = {
            id: newId,
            ...userData,
            subscribers: [],
            subscriptions: [],
            communities: [],
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem(this.usersKey, JSON.stringify(users));
        return newUser;
    }

    updateUser(userId, updates) {
        const users = this.getUsers();
        const index = users.findIndex(u => u.id === userId);
        
        if (index !== -1) {
            users[index] = { ...users[index], ...updates };
            localStorage.setItem(this.usersKey, JSON.stringify(users));
            
            // Обновляем текущего пользователя
            const currentUser = this.getCurrentUser();
            if (currentUser && currentUser.id === userId) {
                this.setCurrentUser(users[index]);
            }
            
            return users[index];
        }
        return null;
    }

    // Друзья и подписки
    getFriendships() {
        return JSON.parse(localStorage.getItem(this.friendshipsKey)) || [];
    }

    addFriendship(userId, friendId) {
        const friendships = this.getFriendships();
        const newId = friendships.length > 0 ? Math.max(...friendships.map(f => f.id)) + 1 : 1;
        
        const existingFriendship = friendships.find(f => 
            (f.userId === userId && f.friendId === friendId) || 
            (f.userId === friendId && f.friendId === userId)
        );
        
        if (existingFriendship) {
            if (existingFriendship.status === 'pending' && existingFriendship.friendId === userId) {
                existingFriendship.status = 'accepted';
                localStorage.setItem(this.friendshipsKey, JSON.stringify(friendships));
                return { ...existingFriendship, status: 'accepted' };
            }
            return null;
        }
        
        const newFriendship = {
            id: newId,
            userId,
            friendId,
            status: 'pending'
        };
        
        friendships.push(newFriendship);
        localStorage.setItem(this.friendshipsKey, JSON.stringify(friendships));
        return newFriendship;
    }

    acceptFriendship(friendshipId) {
        const friendships = this.getFriendships();
        const friendship = friendships.find(f => f.id === friendshipId);
        
        if (friendship) {
            friendship.status = 'accepted';
            localStorage.setItem(this.friendshipsKey, JSON.stringify(friendships));
        }
    }

    removeFriendship(userId, friendId) {
        const friendships = this.getFriendships();
        const filtered = friendships.filter(f => 
            !(f.userId === userId && f.friendId === friendId) && 
            !(f.userId === friendId && f.friendId === userId)
        );
        localStorage.setItem(this.friendshipsKey, JSON.stringify(filtered));
    }

    getUserFriends(userId) {
        const friendships = this.getFriendships();
        return friendships
            .filter(f => (f.userId === userId || f.friendId === userId) && f.status === 'accepted')
            .map(f => f.userId === userId ? f.friendId : f.userId);
    }

    getPendingFriendships(userId) {
        const friendships = this.getFriendships();
        return friendships.filter(f => f.friendId === userId && f.status === 'pending');
    }

    // Посты
    getPosts() {
        return JSON.parse(localStorage.getItem(this.postsKey)) || [];
    }

    getPostsByUserId(userId) {
        return this.getPosts().filter(post => post.userId === userId);
    }

    createPost(userId, content) {
        const posts = this.getPosts();
        const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
        
        const newPost = {
            id: newId,
            userId,
            content,
            createdAt: new Date().toISOString(),
            likes: [],
            comments: []
        };
        
        posts.push(newPost);
        localStorage.setItem(this.postsKey, JSON.stringify(posts));
        return newPost;
    }

    deletePost(postId) {
        const posts = this.getPosts();
        const filtered = posts.filter(p => p.id !== postId);
        localStorage.setItem(this.postsKey, JSON.stringify(filtered));
    }

    likePost(postId, userId) {
        const posts = this.getPosts();
        const post = posts.find(p => p.id === postId);
        
        if (post) {
            if (!post.likes.includes(userId)) {
                post.likes.push(userId);
                localStorage.setItem(this.postsKey, JSON.stringify(posts));
                return true;
            } else {
                post.likes = post.likes.filter(id => id !== userId);
                localStorage.setItem(this.postsKey, JSON.stringify(posts));
                return false;
            }
        }
        return null;
    }

    addComment(postId, userId, text) {
        const posts = this.getPosts();
        const post = posts.find(p => p.id === postId);
        
        if (post) {
            const commentId = post.comments.length > 0 ? Math.max(...post.comments.map(c => c.id)) + 1 : 1;
            post.comments.push({
                id: commentId,
                userId,
                text,
                createdAt: new Date().toISOString()
            });
            localStorage.setItem(this.postsKey, JSON.stringify(posts));
            return commentId;
        }
        return null;
    }

    deleteComment(postId, commentId) {
        const posts = this.getPosts();
        const post = posts.find(p => p.id === postId);
        
        if (post) {
            post.comments = post.comments.filter(c => c.id !== commentId);
            localStorage.setItem(this.postsKey, JSON.stringify(posts));
            return true;
        }
        return false;
    }

    // Мероприятия
    getEvents() {
        return JSON.parse(localStorage.getItem(this.eventsKey)) || [];
    }

    getUpcomingEvents() {
        const today = new Date().toISOString().split('T')[0];
        return this.getEvents().filter(event => event.date >= today)
                               .sort((a, b) => a.date.localeCompare(b.date));
    }

    getEventById(id) {
        return this.getEvents().find(event => event.id === id);
    }

    joinEvent(eventId, userId) {
        const events = this.getEvents();
        const event = events.find(e => e.id === eventId);
        
        if (event && !event.participants.includes(userId) && event.participants.length < event.maxParticipants) {
            event.participants.push(userId);
            localStorage.setItem(this.eventsKey, JSON.stringify(events));
            return true;
        }
        return false;
    }

    leaveEvent(eventId, userId) {
        const events = this.getEvents();
        const event = events.find(e => e.id === eventId);
        
        if (event) {
            event.participants = event.participants.filter(id => id !== userId);
            localStorage.setItem(this.eventsKey, JSON.stringify(events));
            return true;
        }
        return false;
    }

    // Форум
    getForumTopics() {
        return JSON.parse(localStorage.getItem(this.forumTopicsKey)) || [];
    }

    getForumTopicById(id) {
        return this.getForumTopics().find(topic => topic.id === id);
    }

    createForumTopic(topicData) {
        const topics = this.getForumTopics();
        const newId = topics.length > 0 ? Math.max(...topics.map(t => t.id)) + 1 : 1;
        
        const newTopic = {
            id: newId,
            ...topicData,
            createdAt: new Date().toISOString(),
            lastActivity: new Date().toISOString(),
            posts: 0,
            views: 0,
            isPinned: false
        };
        
        topics.push(newTopic);
        localStorage.setItem(this.forumTopicsKey, JSON.stringify(topics));
        return newTopic;
    }

    getForumReplies(topicId) {
        const replies = JSON.parse(localStorage.getItem(this.forumRepliesKey)) || [];
        return replies.filter(reply => reply.topicId === topicId)
                      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    addForumReply(topicId, userId, content) {
        const replies = JSON.parse(localStorage.getItem(this.forumRepliesKey)) || [];
        const topics = this.getForumTopics();
        const topic = topics.find(t => t.id === topicId);
        
        if (topic) {
            const newId = replies.length > 0 ? Math.max(...replies.map(r => r.id)) + 1 : 1;
            
            const newReply = {
                id: newId,
                topicId,
                userId,
                content,
                createdAt: new Date().toISOString(),
                likes: 0
            };
            
            replies.push(newReply);
            localStorage.setItem(this.forumRepliesKey, JSON.stringify(replies));
            
            // Обновляем статистику темы
            topic.posts += 1;
            topic.lastActivity = new Date().toISOString();
            localStorage.setItem(this.forumTopicsKey, JSON.stringify(topics));
            
            return newReply;
        }
        return null;
    }

    // Сообщества
    getCommunities() {
        return JSON.parse(localStorage.getItem(this.communitiesKey)) || [];
    }

    getCommunityById(id) {
        return this.getCommunities().find(community => community.id === id);
    }

    joinCommunity(communityId, userId) {
        const communities = this.getCommunities();
        const community = communities.find(c => c.id === communityId);
        
        if (community && !community.members.includes(userId)) {
            community.members.push(userId);
            localStorage.setItem(this.communitiesKey, JSON.stringify(communities));
            
            // Обновляем пользователя
            const user = this.getUserById(userId);
            if (user && !user.communities.includes(communityId)) {
                user.communities.push(communityId);
                this.updateUser(userId, { communities: user.communities });
            }
            return true;
        }
        return false;
    }

    leaveCommunity(communityId, userId) {
        const communities = this.getCommunities();
        const community = communities.find(c => c.id === communityId);
        
        if (community) {
            community.members = community.members.filter(id => id !== userId);
            localStorage.setItem(this.communitiesKey, JSON.stringify(communities));
            
            // Обновляем пользователя
            const user = this.getUserById(userId);
            if (user) {
                user.communities = user.communities.filter(id => id !== communityId);
                this.updateUser(userId, { communities: user.communities });
            }
            return true;
        }
        return false;
    }

    getCommunityPosts(communityId) {
        const posts = JSON.parse(localStorage.getItem(this.communityPostsKey)) || [];
        return posts.filter(post => post.communityId === communityId)
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    createCommunityPost(communityId, userId, content) {
        const posts = JSON.parse(localStorage.getItem(this.communityPostsKey)) || [];
        const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
        
        const newPost = {
            id: newId,
            communityId,
            userId,
            content,
            createdAt: new Date().toISOString(),
            likes: []
        };
        
        posts.push(newPost);
        localStorage.setItem(this.communityPostsKey, JSON.stringify(posts));
        return newPost;
    }

    likeCommunityPost(postId, userId) {
        const posts = JSON.parse(localStorage.getItem(this.communityPostsKey)) || [];
        const post = posts.find(p => p.id === postId);
        
        if (post) {
            if (!post.likes.includes(userId)) {
                post.likes.push(userId);
                localStorage.setItem(this.communityPostsKey, JSON.stringify(posts));
                return true;
            } else {
                post.likes = post.likes.filter(id => id !== userId);
                localStorage.setItem(this.communityPostsKey, JSON.stringify(posts));
                return false;
            }
        }
        return null;
    }

    // Текущий пользователь
    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.currentUserKey));
    }

    setCurrentUser(user) {
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem(this.currentUserKey);
    }
}

// Основное приложение
class MediaHubApp {
    constructor() {
        this.db = new Database();
        this.currentUser = this.db.getCurrentUser();
        this.currentPage = 'home';
        this.currentCommunityId = null;
        this.currentDiscussionId = null;
        this.init();
    }

    init() {
        // Загрузка страницы
        this.loadPage('home');
        this.updateUserPanel();
        
        // Обработчики навигации
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.loadPage(page);
                
                // Обновляем активную ссылку
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Модальные окна
        this.setupModals();
        
        // Если пользователь не авторизован, показываем окно входа
        if (!this.currentUser) {
            setTimeout(() => {
                this.showModal('authModal');
            }, 1000);
        }
    }

    // Загрузка страниц
    loadPage(page) {
        this.currentPage = page;
        const mainContent = document.getElementById('mainContent');
        
        switch(page) {
            case 'home':
                this.loadHomePage(mainContent);
                break;
            case 'news':
                this.loadNewsPage(mainContent);
                break;
            case 'events':
                this.loadEventsPage(mainContent);
                break;
            case 'forum':
                this.loadForumPage(mainContent);
                break;
            case 'network':
                this.loadNetworkPage(mainContent);
                break;
            case 'profile':
                this.loadProfilePage(mainContent);
                break;
            case 'edit-profile':
                this.loadEditProfilePage(mainContent);
                break;
            case 'community':
                this.loadCommunityPage(mainContent);
                break;
            case 'forum-discussion':
                this.loadForumDiscussionPage(mainContent);
                break;
            default:
                this.loadHomePage(mainContent);
        }
    }

    loadHomePage(container) {
        const template = document.getElementById('homeTemplate');
        container.innerHTML = '';
        container.appendChild(template.content.cloneNode(true));
        
        // Загружаем последние новости
        this.loadRecentNews(container);
        
        // Обработчики для домашней страницы
        document.getElementById('joinBtn')?.addEventListener('click', () => {
            if (!this.currentUser) {
                this.showModal('authModal');
            } else {
                alert('Вы уже присоединились к сообществу!');
            }
        });
        
        // Показываем приветствие для гостей
        if (!this.currentUser || this.currentUser.id === 999) {
            const heroContent = container.querySelector('.hero-content');
            if (heroContent) {
                const welcomeText = heroContent.querySelector('p');
                if (welcomeText) {
                    welcomeText.innerHTML += '<br><small style="color: #666; font-size: 0.9rem; margin-top: 10px; display: block;">Для полного доступа зарегистрируйтесь или войдите</small>';
                }
            }
        }
    }

    loadRecentNews(container) {
        const newsSection = container.querySelector('.section');
        if (!newsSection) return;
        
        const recentNews = this.db.getRecentNews(3);
        
        if (recentNews.length > 0) {
            const newsGrid = newsSection.querySelector('.news-grid');
            if (newsGrid) {
                // Добавляем новые новости
                recentNews.forEach(news => {
                    const newsCard = document.createElement('div');
                    newsCard.className = 'news-card';
                    newsCard.innerHTML = `
                        <img src="${news.image}" alt="${news.title}" class="news-image">
                        <div class="news-content">
                            <div class="news-date">${news.date}</div>
                            <h3>${news.title}</h3>
                            <p>${news.description}</p>
                            <a href="#" class="read-more" data-news-id="${news.id}">Подробнее <i class="fas fa-arrow-right"></i></a>
                        </div>
                    `;
                    newsGrid.appendChild(newsCard);
                });
            }
        }
    }

    loadNewsPage(container) {
        const allNews = this.db.getNews();
        const recentNews = allNews.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Новости с 20 ноября по 10 декабря 2025
        const novemberDecemberNews = this.db.getNewsByDateRange('2025-11-20', '2025-12-10');
        
        container.innerHTML = `
            <section class="section">
                <h2><i class="fas fa-newspaper"></i> Все новости УлГТУ</h2>
                
                <div class="news-filter">
                    <button class="btn-secondary active" data-filter="all">Все новости</button>
                    <button class="btn-secondary" data-filter="recent">Последние</button>
                    <button class="btn-secondary" data-filter="nov-dec">Ноябрь-Декабрь 2025</button>
                </div>
                
                <div class="news-list" id="newsList">
                    ${recentNews.map(news => `
                        <div class="news-card-full" data-category="${news.category}" data-date="${news.date}">
                            <img src="${news.image}" alt="${news.title}">
                            <div class="news-content-full">
                                <div class="news-date">${news.date}</div>
                                <span class="news-category">${news.category}</span>
                                <h3>${news.title}</h3>
                                <p>${news.description}</p>
                                <p><strong>Просмотров:</strong> ${news.views}</p>
                                <a href="#" class="read-more" data-news-id="${news.id}">Читать полностью <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
        
        // Добавляем стили для фильтра новостей
        const style = document.createElement('style');
        style.textContent = `
            .news-filter {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
                flex-wrap: wrap;
            }
            .news-filter button.active {
                background-color: #ff6b00;
            }
            .news-list {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        `;
        document.head.appendChild(style);
        
        // Обработчики фильтров
        container.querySelectorAll('.news-filter button').forEach(btn => {
            btn.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок
                container.querySelectorAll('.news-filter button').forEach(b => b.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                const newsList = container.querySelector('#newsList');
                
                let filteredNews = allNews;
                
                switch(filter) {
                    case 'recent':
                        filteredNews = allNews.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
                        break;
                    case 'nov-dec':
                        filteredNews = novemberDecemberNews.sort((a, b) => new Date(b.date) - new Date(a.date));
                        break;
                    default:
                        filteredNews = allNews.sort((a, b) => new Date(b.date) - new Date(a.date));
                }
                
                newsList.innerHTML = filteredNews.map(news => `
                    <div class="news-card-full" data-category="${news.category}" data-date="${news.date}">
                        <img src="${news.image}" alt="${news.title}">
                        <div class="news-content-full">
                            <div class="news-date">${news.date}</div>
                            <span class="news-category">${news.category}</span>
                            <h3>${news.title}</h3>
                            <p>${news.description}</p>
                            <p><strong>Просмотров:</strong> ${news.views}</p>
                            <a href="#" class="read-more" data-news-id="${news.id}">Читать полностью <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                `).join('');
            });
        });
    }

    loadEventsPage(container) {
        const events = this.db.getUpcomingEvents();
        
        container.innerHTML = `
            <section class="section">
                <h2><i class="fas fa-calendar-alt"></i> Мероприятия 2025</h2>
                <div class="events-grid">
                    ${events.map(event => {
                        const date = new Date(event.date);
                        const day = date.getDate();
                        const month = date.toLocaleDateString('ru-RU', { month: 'long' });
                        const participantsCount = event.participants.length;
                        const isParticipating = this.currentUser && this.currentUser.id !== 999 && event.participants.includes(this.currentUser.id);
                        
                        return `
                            <div class="event-card">
                                <div class="event-image">
                                    <img src="${event.image}" alt="${event.title}">
                                </div>
                                <div class="event-content">
                                    <div class="event-header">
                                        <div class="event-date">
                                            <span class="day">${day}</span>
                                            <span class="month">${month}</span>
                                        </div>
                                        <div class="event-title">
                                            <h3>${event.title}</h3>
                                            <span class="event-category">${event.category}</span>
                                        </div>
                                    </div>
                                    <p class="event-description">${event.description}</p>
                                    <div class="event-details">
                                        <p><i class="fas fa-clock"></i> ${event.time}</p>
                                        <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                                        <p><i class="fas fa-user-friends"></i> ${participantsCount}/${event.maxParticipants} участников</p>
                                    </div>
                                    <div class="event-actions">
                                        ${!this.currentUser || this.currentUser.id === 999 ? `
                                            <button class="btn-primary" onclick="app.showModal('authModal')">
                                                <i class="fas fa-sign-in-alt"></i> Войдите для записи
                                            </button>
                                        ` : `
                                            <button class="btn-primary ${isParticipating ? 'btn-secondary' : ''}" 
                                                    data-event-id="${event.id}" 
                                                    data-action="${isParticipating ? 'leave' : 'join'}">
                                                <i class="fas ${isParticipating ? 'fa-times' : 'fa-check'}"></i>
                                                ${isParticipating ? 'Отменить участие' : 'Записаться'}
                                            </button>
                                        `}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
        
        // Добавляем стили для мероприятий
        const style = document.createElement('style');
        style.textContent = `
            .events-grid {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .event-card {
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                display: flex;
            }
            .event-image {
                width: 300px;
                height: 250px;
                overflow: hidden;
                flex-shrink: 0;
            }
            .event-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .event-content {
                flex: 1;
                padding: 25px;
                display: flex;
                flex-direction: column;
            }
            .event-header {
                display: flex;
                gap: 20px;
                margin-bottom: 15px;
                align-items: flex-start;
            }
            .event-date {
                background: #003366;
                color: white;
                padding: 15px;
                border-radius: 10px;
                text-align: center;
                min-width: 70px;
            }
            .event-date .day {
                font-size: 1.8rem;
                font-weight: bold;
                display: block;
            }
            .event-date .month {
                font-size: 1rem;
                text-transform: uppercase;
            }
            .event-title {
                flex: 1;
            }
            .event-title h3 {
                color: #003366;
                margin-bottom: 5px;
            }
            .event-category {
                background: #f0f0f0;
                padding: 3px 10px;
                border-radius: 15px;
                font-size: 0.9rem;
                color: #666;
            }
            .event-description {
                color: #666;
                margin-bottom: 15px;
                flex: 1;
            }
            .event-details {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                margin-bottom: 15px;
            }
            .event-details p {
                color: #666;
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.9rem;
            }
            @media (max-width: 992px) {
                .event-card {
                    flex-direction: column;
                }
                .event-image {
                    width: 100%;
                    height: 200px;
                }
                .event-details {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Обработчики для мероприятий
        container.querySelectorAll('[data-event-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const eventId = parseInt(btn.getAttribute('data-event-id'));
                const action = btn.getAttribute('data-action');
                
                if (!this.currentUser || this.currentUser.id === 999) {
                    this.showModal('authModal');
                    return;
                }
                
                if (action === 'join') {
                    if (this.db.joinEvent(eventId, this.currentUser.id)) {
                        this.showNotification('Вы записались на мероприятие!');
                        btn.innerHTML = '<i class="fas fa-times"></i> Отменить участие';
                        btn.classList.remove('btn-primary');
                        btn.classList.add('btn-secondary');
                        btn.setAttribute('data-action', 'leave');
                    } else {
                        alert('Не удалось записаться. Возможно, мероприятие заполнено.');
                    }
                } else {
                    if (this.db.leaveEvent(eventId, this.currentUser.id)) {
                        this.showNotification('Вы отменили участие в мероприятии');
                        btn.innerHTML = '<i class="fas fa-check"></i> Записаться';
                        btn.classList.remove('btn-secondary');
                        btn.classList.add('btn-primary');
                        btn.setAttribute('data-action', 'join');
                    }
                }
            });
        });
    }

    loadForumPage(container) {
        const topics = this.db.getForumTopics();
        
        container.innerHTML = `
            <section class="section">
                <h2><i class="fas fa-comments"></i> Форум</h2>
                
                ${!this.currentUser || this.currentUser.id === 999 ? `
                    <div class="forum-guest-notice">
                        <p><i class="fas fa-info-circle"></i> Для создания тем и ответов необходимо войти или зарегистрироваться</p>
                    </div>
                ` : `
                    <div class="forum-actions">
                        <button class="btn-primary" id="createTopicBtn">
                            <i class="fas fa-plus"></i> Создать тему
                        </button>
                    </div>
                `}
                
                <div class="forum-topics">
                    ${topics.map(topic => {
                        const author = this.db.getUserById(topic.authorId);
                        const lastActivity = new Date(topic.lastActivity).toLocaleDateString('ru-RU');
                        
                        return `
                            <div class="forum-topic ${topic.isPinned ? 'pinned' : ''}" data-topic-id="${topic.id}">
                                <div class="topic-icon">
                                    <i class="fas ${topic.isPinned ? 'fa-thumbtack' : 'fa-comment'}"></i>
                                </div>
                                <div class="topic-content">
                                    <h3>${topic.title}</h3>
                                    <p>${topic.description}</p>
                                    <div class="topic-meta">
                                        <span class="topic-author">${author.firstName} ${author.lastName}</span>
                                        <span class="topic-category">${topic.category}</span>
                                        <span class="topic-posts">${topic.posts} сообщений</span>
                                        <span class="topic-views">${topic.views} просмотров</span>
                                        <span class="topic-last-activity">${lastActivity}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
        
        // Добавляем стили для форума
        const style = document.createElement('style');
        style.textContent = `
            .forum-actions {
                margin-bottom: 30px;
            }
            .forum-guest-notice {
                background: #fff8e1;
                border: 1px solid #ffecb3;
                border-radius: 10px;
                padding: 15px;
                margin-bottom: 20px;
                color: #856404;
            }
            .forum-guest-notice i {
                margin-right: 10px;
            }
            .forum-topics {
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            }
            .forum-topic {
                display: flex;
                padding: 20px;
                border-bottom: 1px solid #eee;
                transition: background-color 0.3s;
                cursor: pointer;
            }
            .forum-topic:hover {
                background-color: #f8f9fa;
            }
            .forum-topic.pinned {
                background-color: #fff8e1;
            }
            .forum-topic:last-child {
                border-bottom: none;
            }
            .topic-icon {
                width: 50px;
                height: 50px;
                background: #003366;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
                font-size: 1.5rem;
            }
            .forum-topic.pinned .topic-icon {
                background: #ff6b00;
            }
            .topic-content {
                flex: 1;
            }
            .topic-content h3 {
                color: #003366;
                margin-bottom: 5px;
            }
            .topic-content p {
                color: #666;
                margin-bottom: 10px;
            }
            .topic-meta {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                font-size: 0.9rem;
                color: #888;
            }
        `;
        document.head.appendChild(style);
        
        // Обработчик создания темы
        document.getElementById('createTopicBtn')?.addEventListener('click', () => {
            if (!this.currentUser || this.currentUser.id === 999) {
                this.showModal('authModal');
                return;
            }
            
            const title = prompt('Введите заголовок темы:');
            if (!title) return;
            
            const description = prompt('Введите описание темы:');
            if (!description) return;
            
            const category = prompt('Выберите категорию (Учеба, IT, Карьера, Быт):', 'Учеба');
            
            const topic = this.db.createForumTopic({
                title,
                description,
                category: category || 'Учеба',
                authorId: this.currentUser.id
            });
            
            if (topic) {
                this.showNotification('Тема успешно создана!');
                this.loadForumPage(container);
            }
        });
        
        // Обработчики для тем форума
        container.querySelectorAll('.forum-topic').forEach(topic => {
            topic.addEventListener('click', () => {
                const topicId = parseInt(topic.getAttribute('data-topic-id'));
                this.loadForumDiscussion(topicId);
            });
        });
    }

    loadForumDiscussion(topicId) {
        this.currentDiscussionId = topicId;
        this.loadPage('forum-discussion');
    }

    loadForumDiscussionPage(container) {
        if (!this.currentDiscussionId) {
            this.loadPage('forum');
            return;
        }
        
        const topic = this.db.getForumTopicById(this.currentDiscussionId);
        if (!topic) {
            this.loadPage('forum');
            return;
        }
        
        const author = this.db.getUserById(topic.authorId);
        const replies = this.db.getForumReplies(this.currentDiscussionId);
        
        const template = document.getElementById('forumDiscussionTemplate');
        container.innerHTML = '';
        container.appendChild(template.content.cloneNode(true));
        
        // Заполняем данные
        document.getElementById('discussionTitle').textContent = topic.title;
        document.getElementById('discussionAuthor').textContent = `${author.firstName} ${author.lastName}`;
        document.getElementById('discussionDate').textContent = new Date(topic.createdAt).toLocaleDateString('ru-RU');
        document.getElementById('discussionCategory').textContent = topic.category;
        document.getElementById('discussionContent').innerHTML = `
            <p>${topic.description}</p>
        `;
        
        // Загружаем ответы
        const repliesList = document.getElementById('repliesList');
        repliesList.innerHTML = '';
        
        if (replies.length === 0) {
            repliesList.innerHTML = '<p class="no-replies">Пока нет ответов. Будьте первым!</p>';
        } else {
            replies.forEach(reply => {
                const replyAuthor = this.db.getUserById(reply.userId);
                const replyDate = new Date(reply.createdAt).toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                
                const replyElement = document.createElement('div');
                replyElement.className = 'reply-item';
                replyElement.innerHTML = `
                    <div class="reply-header">
                        <div class="reply-author">${replyAuthor.firstName} ${replyAuthor.lastName}</div>
                        <div class="reply-date">${replyDate}</div>
                    </div>
                    <div class="reply-text">${reply.content}</div>
                `;
                repliesList.appendChild(replyElement);
            });
        }
        
        // Обработчики
        if (!this.currentUser || this.currentUser.id === 999) {
            document.getElementById('replyText').placeholder = 'Войдите или зарегистрируйтесь для ответа';
            document.getElementById('replyText').disabled = true;
            document.getElementById('submitReplyBtn').innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти для ответа';
            document.getElementById('submitReplyBtn').onclick = () => this.showModal('authModal');
        } else {
            document.getElementById('submitReplyBtn')?.addEventListener('click', () => {
                this.submitForumReply();
            });
        }
    }

    submitForumReply() {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }
        
        const replyText = document.getElementById('replyText').value.trim();
        if (!replyText) {
            alert('Введите текст ответа');
            return;
        }
        
        const reply = this.db.addForumReply(this.currentDiscussionId, this.currentUser.id, replyText);
        if (reply) {
            document.getElementById('replyText').value = '';
            this.showNotification('Ответ добавлен!');
            this.loadForumDiscussionPage(document.getElementById('mainContent'));
        }
    }

    loadNetworkPage(container) {
        const communities = this.db.getCommunities();
        const allUsers = this.db.getUsers();
        
        container.innerHTML = `
            <section class="section">
                <h2><i class="fas fa-users"></i> Сообщества</h2>
                <div class="communities-grid">
                    ${communities.map(community => {
                        const isMember = this.currentUser && this.currentUser.id !== 999 && community.members.includes(this.currentUser.id);
                        
                        return `
                            <div class="community-card">
                                <div class="community-header-card">
                                    <img src="${community.image}" alt="${community.name}">
                                    <div class="community-info-card">
                                        <h3>${community.name}</h3>
                                        <div>
                                            <span class="community-category-card">${community.category}</span>
                                            <span class="community-members-card">${community.members.length} участников</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="community-description-card">${community.description}</p>
                                <div class="community-actions-card">
                                    ${!this.currentUser || this.currentUser.id === 999 ? `
                                        <button class="btn-primary" onclick="app.showModal('authModal')">
                                            <i class="fas fa-sign-in-alt"></i> Войти для присоединения
                                        </button>
                                    ` : `
                                        <button class="btn-primary ${isMember ? 'btn-secondary' : ''}" 
                                                data-community-id="${community.id}"
                                                data-action="${isMember ? 'leave' : 'join'}">
                                            <i class="fas ${isMember ? 'fa-sign-out-alt' : 'fa-sign-in-alt'}"></i>
                                            ${isMember ? 'Выйти' : 'Присоединиться'}
                                        </button>
                                    `}
                                    <button class="btn-secondary view-community-btn" data-community-id="${community.id}">
                                        <i class="fas fa-eye"></i> Подробнее
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
            
            ${(!this.currentUser || this.currentUser.id === 999) ? `
                <section class="section">
                    <div class="guest-notice">
                        <h3><i class="fas fa-user-clock"></i> Гостевой доступ</h3>
                        <p>Вы просматриваете сайт как гость. Для просмотра списка студентов и добавления в друзья необходимо войти или зарегистрироваться.</p>
                        <button class="btn-primary" onclick="app.showModal('authModal')">
                            <i class="fas fa-sign-in-alt"></i> Войти / Зарегистрироваться
                        </button>
                    </div>
                </section>
            ` : `
                <section class="section">
                    <h2><i class="fas fa-user-friends"></i> Студенты УлГТУ</h2>
                    <div class="search-box">
                        <input type="text" id="userSearch" placeholder="Поиск по имени, фамилии или факультету..." value="">
                        <button class="btn-secondary" id="searchBtn"><i class="fas fa-search"></i></button>
                    </div>
                    <div class="users-info">
                        <p><i class="fas fa-info-circle"></i> Всего студентов: <strong>${allUsers.length}</strong></p>
                    </div>
                    <div class="users-grid" id="usersGrid">
                        ${allUsers.map(user => {
                            // Пропускаем отображение текущего пользователя
                            if (user.id === this.currentUser.id) return '';
                            
                            const friendship = this.db.getFriendships().find(f => 
                                (f.userId === this.currentUser.id && f.friendId === user.id) ||
                                (f.userId === user.id && f.friendId === this.currentUser.id)
                            );
                            
                            let buttonText = 'Добавить в друзья';
                            let buttonClass = 'btn-primary';
                            let disabled = false;
                            
                            if (friendship) {
                                if (friendship.status === 'pending') {
                                    if (friendship.userId === this.currentUser.id) {
                                        buttonText = 'Запрос отправлен';
                                        buttonClass = 'btn-secondary';
                                        disabled = true;
                                    } else {
                                        buttonText = 'Принять запрос';
                                    }
                                } else if (friendship.status === 'accepted') {
                                    buttonText = 'Друзья';
                                    buttonClass = 'btn-secondary';
                                    disabled = true;
                                }
                            }
                            
                            return `
                                <div class="user-card">
                                    <img src="${user.avatar}" alt="Аватар" class="user-card-avatar">
                                    <div class="user-card-info">
                                        <h3>${user.firstName} ${user.lastName}</h3>
                                        <p>${user.facultyName || user.faculty}, ${user.course} курс</p>
                                        <p class="user-about">${user.about}</p>
                                    </div>
                                    <button class="${buttonClass} add-friend-btn" 
                                            data-user-id="${user.id}"
                                            data-friendship-id="${friendship?.id || ''}"
                                            ${disabled ? 'disabled' : ''}>
                                        <i class="fas fa-user-${friendship?.status === 'accepted' ? 'check' : 'plus'}"></i>
                                        ${buttonText}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </section>
            `}
        `;
        
        // Добавляем стили для сообществ и пользователей
        const style = document.createElement('style');
        style.textContent = `
            .communities-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin-bottom: 40px;
            }
            .community-card {
                background: white;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                transition: transform 0.3s;
            }
            .community-card:hover {
                transform: translateY(-5px);
            }
            .community-header-card {
                display: flex;
                gap: 15px;
                margin-bottom: 15px;
            }
            .community-header-card img {
                width: 80px;
                height: 80px;
                border-radius: 10px;
                object-fit: cover;
            }
            .community-info-card {
                flex: 1;
            }
            .community-info-card h3 {
                color: #003366;
                margin-bottom: 5px;
            }
            .community-category-card {
                background: #f0f0f0;
                padding: 3px 10px;
                border-radius: 15px;
                font-size: 0.9rem;
                color: #666;
                margin-right: 10px;
            }
            .community-members-card {
                color: #666;
                font-size: 0.9rem;
            }
            .community-description-card {
                color: #666;
                margin-bottom: 15px;
                font-size: 0.95rem;
            }
            .community-actions-card {
                display: flex;
                gap: 10px;
            }
            .guest-notice {
                background: white;
                border-radius: 10px;
                padding: 30px;
                text-align: center;
                box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            }
            .guest-notice h3 {
                color: #003366;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            .guest-notice p {
                color: #666;
                margin-bottom: 20px;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
            .search-box {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
            }
            #userSearch {
                flex: 1;
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-family: 'Roboto', sans-serif;
            }
            .users-info {
                background: #f8f9fa;
                padding: 10px 15px;
                border-radius: 5px;
                margin-bottom: 20px;
                color: #666;
            }
            .users-info i {
                margin-right: 8px;
            }
            .users-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
            }
            .user-card {
                background: white;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .user-card-avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin-bottom: 15px;
            }
            .user-card-info h3 {
                color: #003366;
                margin-bottom: 5px;
            }
            .user-card-info p {
                color: #666;
                margin-bottom: 5px;
                font-size: 0.9rem;
            }
            .user-about {
                font-size: 0.85rem;
                color: #888;
                margin-bottom: 15px;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .user-card button {
                width: 100%;
                margin-top: auto;
            }
        `;
        document.head.appendChild(style);
        
        // Обработчики для сообществ
        container.querySelectorAll('[data-community-id]').forEach(btn => {
            if (btn.classList.contains('view-community-btn')) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const communityId = parseInt(btn.getAttribute('data-community-id'));
                    this.viewCommunity(communityId);
                });
            } else if (btn.getAttribute('data-action')) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const communityId = parseInt(btn.getAttribute('data-community-id'));
                    const action = btn.getAttribute('data-action');
                    
                    if (!this.currentUser || this.currentUser.id === 999) {
                        this.showModal('authModal');
                        return;
                    }
                    
                    if (action === 'join') {
                        if (this.db.joinCommunity(communityId, this.currentUser.id)) {
                            this.showNotification('Вы присоединились к сообществу!');
                            btn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Выйти';
                            btn.classList.remove('btn-primary');
                            btn.classList.add('btn-secondary');
                            btn.setAttribute('data-action', 'leave');
                            
                            // Обновляем список сообществ в профиле
                            if (this.currentPage === 'profile') {
                                this.loadUserCommunities();
                            }
                        }
                    } else {
                        if (this.db.leaveCommunity(communityId, this.currentUser.id)) {
                            this.showNotification('Вы вышли из сообщества');
                            btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Присоединиться';
                            btn.classList.remove('btn-secondary');
                            btn.classList.add('btn-primary');
                            btn.setAttribute('data-action', 'join');
                            
                            // Обновляем список сообществ в профиле
                            if (this.currentPage === 'profile') {
                                this.loadUserCommunities();
                            }
                        }
                    }
                });
            }
        });
        
        // Поиск пользователей
        const userSearch = container.querySelector('#userSearch');
        const searchBtn = container.querySelector('#searchBtn');
        const usersGrid = container.querySelector('#usersGrid');
        const usersInfo = container.querySelector('.users-info');
        
        if (userSearch && searchBtn && usersGrid && usersInfo) {
            const performSearch = () => {
                const query = userSearch.value.trim();
                let filteredUsers = this.db.getUsers().filter(user => 
                    user.id !== this.currentUser.id
                );
                
                if (query) {
                    filteredUsers = this.db.searchUsers(query).filter(user => 
                        user.id !== this.currentUser.id
                    );
                }
                
                // Обновляем информацию о количестве
                usersInfo.innerHTML = `<p><i class="fas fa-info-circle"></i> Найдено студентов: <strong>${filteredUsers.length}</strong></p>`;
                
                usersGrid.innerHTML = filteredUsers.map(user => {
                    const friendship = this.db.getFriendships().find(f => 
                        (f.userId === this.currentUser.id && f.friendId === user.id) ||
                        (f.userId === user.id && f.friendId === this.currentUser.id)
                    );
                    
                    let buttonText = 'Добавить в друзья';
                    let buttonClass = 'btn-primary';
                    let disabled = false;
                    
                    if (friendship) {
                        if (friendship.status === 'pending') {
                            if (friendship.userId === this.currentUser.id) {
                                buttonText = 'Запрос отправлен';
                                buttonClass = 'btn-secondary';
                                disabled = true;
                            } else {
                                buttonText = 'Принять запрос';
                            }
                        } else if (friendship.status === 'accepted') {
                            buttonText = 'Друзья';
                            buttonClass = 'btn-secondary';
                            disabled = true;
                        }
                    }
                    
                    return `
                        <div class="user-card">
                            <img src="${user.avatar}" alt="Аватар" class="user-card-avatar">
                            <div class="user-card-info">
                                <h3>${user.firstName} ${user.lastName}</h3>
                                <p>${user.facultyName || user.faculty}, ${user.course} курс</p>
                                <p class="user-about">${user.about}</p>
                            </div>
                            <button class="${buttonClass} add-friend-btn" 
                                    data-user-id="${user.id}"
                                    data-friendship-id="${friendship?.id || ''}"
                                    ${disabled ? 'disabled' : ''}>
                                <i class="fas fa-user-${friendship?.status === 'accepted' ? 'check' : 'plus'}"></i>
                                ${buttonText}
                            </button>
                        </div>
                    `;
                }).join('');
                
                // Добавляем обработчики для новых кнопок
                usersGrid.querySelectorAll('.add-friend-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const userId = parseInt(btn.getAttribute('data-user-id'));
                        const friendshipId = btn.getAttribute('data-friendship-id');
                        
                        if (!this.currentUser || this.currentUser.id === 999) {
                            this.showModal('authModal');
                            return;
                        }
                        
                        if (friendshipId) {
                            // Принять запрос дружбы
                            this.db.acceptFriendship(parseInt(friendshipId));
                            btn.innerHTML = '<i class="fas fa-user-check"></i> Друзья';
                            btn.classList.remove('btn-primary');
                            btn.classList.add('btn-secondary');
                            btn.disabled = true;
                            this.showNotification('Запрос дружбы принят!');
                        } else {
                            // Отправить запрос дружбы
                            const friendship = this.db.addFriendship(this.currentUser.id, userId);
                            if (friendship) {
                                btn.innerHTML = '<i class="fas fa-clock"></i> Запрос отправлен';
                                btn.classList.remove('btn-primary');
                                btn.classList.add('btn-secondary');
                                btn.disabled = true;
                                this.showNotification('Запрос дружбы отправлен!');
                            }
                        }
                        
                        // Обновляем счетчик друзей в профиле
                        if (this.currentPage === 'profile') {
                            this.fillProfileData();
                            this.loadFriends();
                        }
                    });
                });
            };
            
            userSearch.addEventListener('input', performSearch);
            searchBtn.addEventListener('click', performSearch);
            
            // Обработчики для кнопок добавления в друзья
            usersGrid.querySelectorAll('.add-friend-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const userId = parseInt(btn.getAttribute('data-user-id'));
                    const friendshipId = btn.getAttribute('data-friendship-id');
                    
                    if (!this.currentUser || this.currentUser.id === 999) {
                        this.showModal('authModal');
                        return;
                    }
                    
                    if (friendshipId) {
                        // Принять запрос дружбы
                        this.db.acceptFriendship(parseInt(friendshipId));
                        btn.innerHTML = '<i class="fas fa-user-check"></i> Друзья';
                        btn.classList.remove('btn-primary');
                        btn.classList.add('btn-secondary');
                        btn.disabled = true;
                        this.showNotification('Запрос дружбы принят!');
                    } else {
                        // Отправить запрос дружбы
                        const friendship = this.db.addFriendship(this.currentUser.id, userId);
                        if (friendship) {
                            btn.innerHTML = '<i class="fas fa-clock"></i> Запрос отправлен';
                            btn.classList.remove('btn-primary');
                            btn.classList.add('btn-secondary');
                            btn.disabled = true;
                            this.showNotification('Запрос дружбы отправлен!');
                        }
                    }
                    
                    // Обновляем счетчик друзей в профиле
                    if (this.currentPage === 'profile') {
                        this.fillProfileData();
                        this.loadFriends();
                    }
                });
            });
        }
    }

    viewCommunity(communityId) {
        this.currentCommunityId = communityId;
        this.loadPage('community');
    }

    loadCommunityPage(container) {
        if (!this.currentCommunityId) {
            this.loadPage('network');
            return;
        }
        
        const community = this.db.getCommunityById(this.currentCommunityId);
        if (!community) {
            this.loadPage('network');
            return;
        }
        
        const template = document.getElementById('communityTemplate');
        container.innerHTML = '';
        container.appendChild(template.content.cloneNode(true));
        
        // Заполняем данные сообщества
        document.getElementById('communityName').textContent = community.name;
        document.getElementById('communityCategory').textContent = community.category;
        document.getElementById('communityDescription').textContent = community.description;
        document.getElementById('communityRules').textContent = community.rules;
        document.getElementById('communityMembers').textContent = community.members.length;
        
        const coverImg = document.getElementById('communityCover');
        if (coverImg && community.coverImage) {
            coverImg.src = community.coverImage;
        }
        
        // Проверяем, является ли пользователь участником
        const isMember = this.currentUser && this.currentUser.id !== 999 && community.members.includes(this.currentUser.id);
        const joinBtn = document.getElementById('joinCommunityBtn');
        
        if (isMember) {
            joinBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Выйти из сообщества';
            joinBtn.classList.remove('btn-primary');
            joinBtn.classList.add('btn-secondary');
        } else {
            joinBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Присоединиться';
            joinBtn.classList.remove('btn-secondary');
            joinBtn.classList.add('btn-primary');
        }
        
        // Загружаем модераторов
        const moderatorsList = document.getElementById('moderatorsList');
        moderatorsList.innerHTML = '';
        
        community.moderators.forEach(moderatorId => {
            const moderator = this.db.getUserById(moderatorId);
            if (moderator) {
                const moderatorElement = document.createElement('div');
                moderatorElement.className = 'moderator-item';
                moderatorElement.innerHTML = `
                    <img src="${moderator.avatar}" alt="Аватар" class="moderator-avatar">
                    <div>
                        <div class="moderator-name">${moderator.firstName} ${moderator.lastName}</div>
                        <div class="moderator-faculty">${moderator.facultyName || moderator.faculty}</div>
                    </div>
                `;
                moderatorsList.appendChild(moderatorElement);
            }
        });
        
        // Загружаем посты сообщества
        this.loadCommunityPosts();
        
        // Обработчики
        joinBtn.addEventListener('click', () => {
            this.toggleCommunityMembership();
        });
        
        if (!this.currentUser || this.currentUser.id === 999) {
            document.getElementById('communityPostText').placeholder = 'Войдите или зарегистрируйтесь для публикации постов';
            document.getElementById('communityPostText').disabled = true;
            document.getElementById('publishCommunityPostBtn').innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти для публикации';
            document.getElementById('publishCommunityPostBtn').onclick = () => this.showModal('authModal');
        } else {
            document.getElementById('publishCommunityPostBtn')?.addEventListener('click', () => {
                this.createCommunityPost();
            });
        }
    }

    toggleCommunityMembership() {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }
        
        const community = this.db.getCommunityById(this.currentCommunityId);
        if (!community) return;
        
        const isMember = community.members.includes(this.currentUser.id);
        const joinBtn = document.getElementById('joinCommunityBtn');
        
        if (isMember) {
            if (this.db.leaveCommunity(this.currentCommunityId, this.currentUser.id)) {
                this.showNotification('Вы вышли из сообщества');
                joinBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Присоединиться';
                joinBtn.classList.remove('btn-secondary');
                joinBtn.classList.add('btn-primary');
                
                // Обновляем статистику
                document.getElementById('communityMembers').textContent = community.members.length - 1;
                
                // Обновляем список сообществ в профиле
                if (this.currentPage === 'profile') {
                    this.loadUserCommunities();
                }
            }
        } else {
            if (this.db.joinCommunity(this.currentCommunityId, this.currentUser.id)) {
                this.showNotification('Вы присоединились к сообществу!');
                joinBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Выйти из сообщества';
                joinBtn.classList.remove('btn-primary');
                joinBtn.classList.add('btn-secondary');
                
                // Обновляем статистику
                document.getElementById('communityMembers').textContent = community.members.length + 1;
                
                // Обновляем список сообществ в профиле
                if (this.currentPage === 'profile') {
                    this.loadUserCommunities();
                }
            }
        }
    }

    loadCommunityPosts() {
        const postsFeed = document.getElementById('communityPostsFeed');
        if (!postsFeed) return;
        
        const posts = this.db.getCommunityPosts(this.currentCommunityId);
        postsFeed.innerHTML = '';
        
        if (posts.length === 0) {
            postsFeed.innerHTML = '<p class="no-posts">Пока нет постов в сообществе. Будьте первым!</p>';
            return;
        }
        
        posts.forEach(post => {
            const user = this.db.getUserById(post.userId);
            const postElement = this.createCommunityPostElement(post, user);
            postsFeed.appendChild(postElement);
        });
    }

    createCommunityPostElement(post, author) {
        const div = document.createElement('div');
        div.className = 'post-item';
        
        const time = new Date(post.createdAt).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const isLiked = post.likes.includes(this.currentUser?.id || 0);
        
        div.innerHTML = `
            <div class="post-header">
                <img src="${author.avatar}" alt="Аватар" class="post-avatar">
                <div>
                    <div class="post-author">${author.firstName} ${author.lastName}</div>
                    <div class="post-date">${time}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions-buttons">
                ${!this.currentUser || this.currentUser.id === 999 ? `
                    <button class="post-action" onclick="app.showModal('authModal')">
                        <i class="fas fa-heart"></i>
                        <span>${post.likes.length}</span>
                    </button>
                ` : `
                    <button class="post-action ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <i class="fas fa-heart"></i>
                        <span>${post.likes.length}</span>
                    </button>
                `}
            </div>
        `;
        
        // Обработчик лайка
        if (this.currentUser && this.currentUser.id !== 999) {
            div.querySelector('.post-action').addEventListener('click', (e) => {
                if (!this.currentUser || this.currentUser.id === 999) {
                    this.showModal('authModal');
                    return;
                }
                
                const result = this.db.likeCommunityPost(post.id, this.currentUser.id);
                if (result === true) {
                    e.target.classList.add('liked');
                    const countSpan = e.target.querySelector('span');
                    countSpan.textContent = parseInt(countSpan.textContent) + 1;
                } else if (result === false) {
                    e.target.classList.remove('liked');
                    const countSpan = e.target.querySelector('span');
                    countSpan.textContent = parseInt(countSpan.textContent) - 1;
                }
            });
        }
        
        return div;
    }

    createCommunityPost() {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }
        
        const textarea = document.getElementById('communityPostText');
        const content = textarea.value.trim();
        
        if (!content) {
            alert('Введите текст поста');
            return;
        }
        
        const post = this.db.createCommunityPost(this.currentCommunityId, this.currentUser.id, content);
        if (post) {
            textarea.value = '';
            this.loadCommunityPosts();
            this.showNotification('Пост опубликован в сообществе!');
        }
    }

    loadProfilePage(container) {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }

        const template = document.getElementById('profileTemplate');
        container.innerHTML = '';
        container.appendChild(template.content.cloneNode(true));

        // Заполнение данных профиля
        this.fillProfileData();
        
        // Обработчики для страницы профиля
        document.getElementById('editProfileBtn')?.addEventListener('click', () => {
            this.loadPage('edit-profile');
        });

        document.getElementById('changeAvatarBtn')?.addEventListener('click', () => {
            this.showModal('avatarModal');
        });

        document.getElementById('addFriendBtn')?.addEventListener('click', () => {
            this.showAddFriendModal();
        });

        document.getElementById('publishPostBtn')?.addEventListener('click', () => {
            this.createPost();
        });

        // Загрузка постов
        this.loadUserPosts();
        this.loadFriends();
        this.loadUserCommunities();
    }

    loadUserCommunities() {
        const communitiesList = document.getElementById('userCommunitiesList');
        if (!communitiesList || !this.currentUser || this.currentUser.id === 999) return;
        
        const userCommunities = this.currentUser.communities || [];
        communitiesList.innerHTML = '';
        
        if (userCommunities.length === 0) {
            communitiesList.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">Вы не состоите в сообществах</p>';
            return;
        }
        
        userCommunities.forEach(communityId => {
            const community = this.db.getCommunityById(communityId);
            if (community) {
                const div = document.createElement('div');
                div.className = 'community-item';
                div.innerHTML = `
                    <img src="${community.image}" alt="Аватар" class="community-avatar">
                    <div>
                        <div class="community-name">${community.name}</div>
                        <div class="community-category">${community.category}</div>
                    </div>
                `;
                communitiesList.appendChild(div);
            }
        });
    }

    showAddFriendModal() {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }
        
        const allUsers = this.db.getUsers().filter(user => 
            user.id !== this.currentUser.id && 
            !this.db.getUserFriends(this.currentUser.id).includes(user.id)
        );
        
        const modalContent = `
            <span class="close-modal">&times;</span>
            <h2>Добавить в друзья</h2>
            
            <div class="search-box">
                <input type="text" id="friendSearch" placeholder="Поиск по имени или факультету...">
                <button class="btn-secondary" id="friendSearchBtn"><i class="fas fa-search"></i></button>
            </div>
            
            <div class="friends-list-modal" id="friendsListModal">
                ${allUsers.map(user => {
                    const friendship = this.db.getFriendships().find(f => 
                        (f.userId === this.currentUser.id && f.friendId === user.id) ||
                        (f.userId === user.id && f.friendId === this.currentUser.id)
                    );
                    
                    let buttonText = 'Добавить';
                    let buttonClass = 'btn-primary';
                    let disabled = false;
                    
                    if (friendship) {
                        if (friendship.status === 'pending') {
                            buttonText = 'Запрос отправлен';
                            buttonClass = 'btn-secondary';
                            disabled = true;
                        } else if (friendship.status === 'accepted') {
                            buttonText = 'Уже друзья';
                            buttonClass = 'btn-secondary';
                            disabled = true;
                        }
                    }
                    
                    return `
                        <div class="friend-modal-item">
                            <img src="${user.avatar}" alt="Аватар">
                            <div>
                                <strong>${user.firstName} ${user.lastName}</strong>
                                <div style="color: #666; font-size: 0.9rem;">
                                    ${user.facultyName || user.faculty}, ${user.course} курс
                                </div>
                            </div>
                            <button class="${buttonClass} add-friend-modal-btn" 
                                    data-user-id="${user.id}"
                                    data-friendship-id="${friendship?.id || ''}"
                                    ${disabled ? 'disabled' : ''}>
                                ${buttonText}
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        document.getElementById('communityModalContent').innerHTML = modalContent;
        this.showModal('addFriendModal');
        
        // Обработчики для модального окна
        this.setupAddFriendModal();
    }

    setupAddFriendModal() {
        const modal = document.getElementById('addFriendModal');
        const closeBtn = modal.querySelector('.close-modal');
        const searchInput = modal.querySelector('#friendSearch');
        const searchBtn = modal.querySelector('#friendSearchBtn');
        const friendsList = modal.querySelector('#friendsListModal');
        
        closeBtn.addEventListener('click', () => {
            this.hideModal('addFriendModal');
        });
        
        const performSearch = () => {
            const query = searchInput.value.trim();
            let filteredUsers = this.db.getUsers().filter(user => 
                user.id !== this.currentUser.id && 
                !this.db.getUserFriends(this.currentUser.id).includes(user.id)
            );
            
            if (query) {
                filteredUsers = this.db.searchUsers(query).filter(user => 
                    user.id !== this.currentUser.id && 
                    !this.db.getUserFriends(this.currentUser.id).includes(user.id)
                );
            }
            
            friendsList.innerHTML = filteredUsers.map(user => {
                const friendship = this.db.getFriendships().find(f => 
                    (f.userId === this.currentUser.id && f.friendId === user.id) ||
                    (f.userId === user.id && f.friendId === this.currentUser.id)
                );
                
                let buttonText = 'Добавить';
                let buttonClass = 'btn-primary';
                let disabled = false;
                
                if (friendship) {
                    if (friendship.status === 'pending') {
                        buttonText = 'Запрос отправлен';
                        buttonClass = 'btn-secondary';
                        disabled = true;
                    } else if (friendship.status === 'accepted') {
                        buttonText = 'Уже друзья';
                        buttonClass = 'btn-secondary';
                        disabled = true;
                    }
                }
                
                return `
                    <div class="friend-modal-item">
                        <img src="${user.avatar}" alt="Аватар">
                        <div>
                            <strong>${user.firstName} ${user.lastName}</strong>
                            <div style="color: #666; font-size: 0.9rem;">
                                ${user.facultyName || user.faculty}, ${user.course} курс
                            </div>
                        </div>
                        <button class="${buttonClass} add-friend-modal-btn" 
                                data-user-id="${user.id}"
                                data-friendship-id="${friendship?.id || ''}"
                                ${disabled ? 'disabled' : ''}>
                            ${buttonText}
                        </button>
                    </div>
                `;
            }).join('');
            
            // Добавляем обработчики для новых кнопок
            friendsList.querySelectorAll('.add-friend-modal-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const userId = parseInt(btn.getAttribute('data-user-id'));
                    const friendshipId = btn.getAttribute('data-friendship-id');
                    
                    if (friendshipId) {
                        // Принять запрос дружбы
                        this.db.acceptFriendship(parseInt(friendshipId));
                        btn.textContent = 'Уже друзья';
                        btn.classList.remove('btn-primary');
                        btn.classList.add('btn-secondary');
                        btn.disabled = true;
                        this.showNotification('Запрос дружбы принят!');
                    } else {
                        // Отправить запрос дружбы
                        const friendship = this.db.addFriendship(this.currentUser.id, userId);
                        if (friendship) {
                            btn.textContent = 'Запрос отправлен';
                            btn.classList.remove('btn-primary');
                            btn.classList.add('btn-secondary');
                            btn.disabled = true;
                            this.showNotification('Запрос дружбы отправлен!');
                        }
                    }
                    
                    // Обновляем профиль
                    this.fillProfileData();
                    this.loadFriends();
                });
            });
        };
        
        searchInput?.addEventListener('input', performSearch);
        searchBtn?.addEventListener('click', performSearch);
        
        // Добавляем обработчики для кнопок
        friendsList.querySelectorAll('.add-friend-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const userId = parseInt(btn.getAttribute('data-user-id'));
                const friendshipId = btn.getAttribute('data-friendship-id');
                
                if (friendshipId) {
                    // Принять запрос дружбы
                    this.db.acceptFriendship(parseInt(friendshipId));
                    btn.textContent = 'Уже друзья';
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-secondary');
                    btn.disabled = true;
                    this.showNotification('Запрос дружбы принят!');
                } else {
                    // Отправить запрос дружбы
                    const friendship = this.db.addFriendship(this.currentUser.id, userId);
                    if (friendship) {
                        btn.textContent = 'Запрос отправлен';
                        btn.classList.remove('btn-primary');
                        btn.classList.add('btn-secondary');
                        btn.disabled = true;
                        this.showNotification('Запрос дружбы отправлен!');
                    }
                }
                
                // Обновляем профиль
                this.fillProfileData();
                this.loadFriends();
            });
        });
        
        // Закрытие по клику вне окна
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideModal('addFriendModal');
            }
        });
    }

    loadEditProfilePage(container) {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }

        const template = document.getElementById('editProfileTemplate');
        container.innerHTML = '';
        container.appendChild(template.content.cloneNode(true));

        // Заполнение формы данными
        this.fillEditForm();
        
        // Обработчики
        document.getElementById('editProfileForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveProfileChanges();
        });

        document.getElementById('cancelEditBtn')?.addEventListener('click', () => {
            this.loadPage('profile');
        });

        document.getElementById('chooseAvatarBtn')?.addEventListener('click', () => {
            this.showModal('avatarModal');
        });

        document.getElementById('editAvatar')?.addEventListener('change', (e) => {
            this.handleAvatarUpload(e);
        });
    }

    // Заполнение данных профиля
    fillProfileData() {
        if (!this.currentUser || this.currentUser.id === 999) return;

        document.getElementById('profileName').textContent = 
            `${this.currentUser.firstName} ${this.currentUser.lastName}`;
        
        const avatarImg = document.getElementById('profileAvatar');
        if (avatarImg) {
            avatarImg.src = this.currentUser.avatar || 
                'https://api.dicebear.com/7.x/avataaars/svg?seed=default';
        }
        
        document.getElementById('profileFaculty').textContent = 
            `Факультет: ${this.currentUser.facultyName || this.currentUser.faculty}`;
        
        document.getElementById('profileCourse').textContent = 
            `Курс: ${this.currentUser.course}`;
        
        document.getElementById('profileAbout').textContent = 
            this.currentUser.about || 'Расскажите о себе...';
        
        // Статистика
        const friends = this.db.getUserFriends(this.currentUser.id);
        document.getElementById('friendsCount').textContent = friends.length;
        document.getElementById('subscribersCount').textContent = 
            (this.currentUser.subscribers || []).length;
        document.getElementById('subscriptionsCount').textContent = 
            (this.currentUser.subscriptions || []).length;
    }

    fillEditForm() {
        if (!this.currentUser || this.currentUser.id === 999) return;

        document.getElementById('editFirstName').value = this.currentUser.firstName || '';
        document.getElementById('editLastName').value = this.currentUser.lastName || '';
        document.getElementById('editFaculty').value = this.currentUser.faculty || '';
        document.getElementById('editCourse').value = this.currentUser.course || '';
        document.getElementById('editAbout').value = this.currentUser.about || '';
        document.getElementById('editEmail').value = this.currentUser.email || '';
        const preview = document.getElementById('editAvatarPreview');
        if (preview) {
            preview.src = this.currentUser.avatar || 
                'https://api.dicebear.com/7.x/avataaars/svg?seed=default';
        }
    }

    // Загрузка постов
    loadUserPosts() {
        const postsFeed = document.getElementById('postsFeed');
        if (!postsFeed || !this.currentUser || this.currentUser.id === 999) return;

        const posts = this.db.getPostsByUserId(this.currentUser.id);
        postsFeed.innerHTML = '';

        if (posts.length === 0) {
            postsFeed.innerHTML = '<p class="no-posts">Пока нет постов. Будьте первым!</p>';
            return;
        }

        posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).forEach(post => {
            const user = this.db.getUserById(post.userId);
            const postElement = this.createPostElement(post, user);
            postsFeed.appendChild(postElement);
        });
    }

    createPostElement(post, author) {
        const div = document.createElement('div');
        div.className = 'post-item';
        
        const time = new Date(post.createdAt).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const isLiked = post.likes.includes(this.currentUser.id);
        
        div.innerHTML = `
            <div class="post-header">
                <img src="${author.avatar}" alt="Аватар" class="post-avatar">
                <div>
                    <div class="post-author">${author.firstName} ${author.lastName}</div>
                    <div class="post-date">${time}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions-buttons">
                <button class="post-action like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                    <i class="fas fa-heart"></i>
                    <span>${post.likes.length}</span>
                </button>
                <button class="post-action comment-btn" data-post-id="${post.id}">
                    <i class="fas fa-comment"></i>
                    <span>${post.comments.length}</span>
                </button>
            </div>
            <div class="post-comments" id="comments-${post.id}" style="display: none;">
                ${post.comments.map(comment => {
                    const commentUser = this.db.getUserById(comment.userId);
                    const commentTime = new Date(comment.createdAt).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    const canDelete = this.currentUser && (this.currentUser.id === comment.userId || this.currentUser.id === post.userId);
                    
                    return `
                        <div class="comment" id="comment-${comment.id}">
                            <img src="${commentUser.avatar}" alt="Аватар" class="comment-avatar">
                            <div class="comment-content">
                                <div class="comment-header">
                                    <div class="comment-author">${commentUser.firstName} ${commentUser.lastName}</div>
                                    <div class="comment-date">${commentTime}</div>
                                </div>
                                <div class="comment-text">${comment.text}</div>
                                ${canDelete ? `
                                    <div class="comment-actions">
                                        <button class="delete-comment-btn" data-post-id="${post.id}" data-comment-id="${comment.id}">
                                            <i class="fas fa-trash"></i> Удалить
                                        </button>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
                <div class="comment-form">
                    <input type="text" placeholder="Добавить комментарий..." class="comment-input" data-post-id="${post.id}">
                    <button class="btn-secondary post-comment-btn" data-post-id="${post.id}">Отправить</button>
                </div>
            </div>
        `;
        
        // Обработчики для поста
        div.querySelector('.like-btn').addEventListener('click', (e) => {
            this.likePost(post.id);
        });
        
        div.querySelector('.comment-btn').addEventListener('click', (e) => {
            const commentsDiv = div.querySelector('.post-comments');
            commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
        });
        
        div.querySelector('.post-comment-btn').addEventListener('click', (e) => {
            const input = div.querySelector('.comment-input');
            if (input.value.trim()) {
                this.addComment(post.id, input.value);
                input.value = '';
            }
        });
        
        // Обработчики удаления комментариев
        div.querySelectorAll('.delete-comment-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const postId = parseInt(btn.getAttribute('data-post-id'));
                const commentId = parseInt(btn.getAttribute('data-comment-id'));
                this.deleteComment(postId, commentId);
            });
        });
        
        return div;
    }

    // Загрузка друзей
    loadFriends() {
        const friendsList = document.getElementById('friendsList');
        if (!friendsList || !this.currentUser || this.currentUser.id === 999) return;

        const friendIds = this.db.getUserFriends(this.currentUser.id);
        friendsList.innerHTML = '';

        if (friendIds.length === 0) {
            friendsList.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">Пока нет друзей</p>';
            return;
        }

        friendIds.forEach(friendId => {
            const friend = this.db.getUserById(friendId);
            if (friend) {
                const div = document.createElement('div');
                div.className = 'friend-item';
                div.innerHTML = `
                    <img src="${friend.avatar}" alt="Аватар" class="friend-avatar">
                    <div>
                        <div class="friend-name">${friend.firstName} ${friend.lastName}</div>
                        <div class="friend-faculty">${friend.facultyName || friend.faculty}</div>
                    </div>
                `;
                friendsList.appendChild(div);
            }
        });
    }

    // Действия пользователя
    createPost() {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }
        
        const textarea = document.getElementById('newPostText');
        const content = textarea.value.trim();
        
        if (!content) {
            alert('Введите текст поста');
            return;
        }
        
        const post = this.db.createPost(this.currentUser.id, content);
        textarea.value = '';
        
        // Обновляем ленту
        this.loadUserPosts();
        
        // Показываем уведомление
        this.showNotification('Пост опубликован!');
    }

    likePost(postId) {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }
        
        const result = this.db.likePost(postId, this.currentUser.id);
        
        // Обновляем отображение
        const likeBtn = document.querySelector(`.like-btn[data-post-id="${postId}"]`);
        if (likeBtn) {
            if (result === true) {
                likeBtn.classList.add('liked');
                const countSpan = likeBtn.querySelector('span');
                countSpan.textContent = parseInt(countSpan.textContent) + 1;
            } else if (result === false) {
                likeBtn.classList.remove('liked');
                const countSpan = likeBtn.querySelector('span');
                countSpan.textContent = parseInt(countSpan.textContent) - 1;
            }
        }
    }

    addComment(postId, text) {
        if (!this.currentUser || this.currentUser.id === 999) {
            this.showModal('authModal');
            return;
        }
        
        const commentId = this.db.addComment(postId, this.currentUser.id, text);
        
        if (commentId) {
            // Обновляем отображение
            const postElement = document.querySelector(`.post-item .post-comments#comments-${postId}`);
            if (postElement) {
                const commentUser = this.db.getUserById(this.currentUser.id);
                const commentTime = new Date().toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.id = `comment-${commentId}`;
                commentDiv.innerHTML = `
                    <img src="${commentUser.avatar}" alt="Аватар" class="comment-avatar">
                    <div class="comment-content">
                        <div class="comment-header">
                            <div class="comment-author">${commentUser.firstName} ${commentUser.lastName}</div>
                            <div class="comment-date">${commentTime}</div>
                        </div>
                        <div class="comment-text">${text}</div>
                        <div class="comment-actions">
                            <button class="delete-comment-btn" data-post-id="${postId}" data-comment-id="${commentId}">
                                <i class="fas fa-trash"></i> Удалить
                            </button>
                        </div>
                    </div>
                `;
                
                // Добавляем обработчик удаления
                const deleteBtn = commentDiv.querySelector('.delete-comment-btn');
                deleteBtn.addEventListener('click', (e) => {
                    this.deleteComment(postId, commentId);
                });
                
                postElement.insertBefore(commentDiv, postElement.querySelector('.comment-form'));
            }
            
            // Обновляем счетчик комментариев
            const commentBtn = document.querySelector(`.comment-btn[data-post-id="${postId}"] span`);
            if (commentBtn) {
                const currentCount = parseInt(commentBtn.textContent);
                commentBtn.textContent = currentCount + 1;
            }
            
            this.showNotification('Комментарий добавлен!');
        }
    }

    deleteComment(postId, commentId) {
        if (!this.currentUser || this.currentUser.id === 999) return;
        
        if (confirm('Вы уверены, что хотите удалить этот комментарий?')) {
            const success = this.db.deleteComment(postId, commentId);
            if (success) {
                const commentElement = document.getElementById(`comment-${commentId}`);
                if (commentElement) {
                    commentElement.remove();
                    
                    // Обновляем счетчик комментариев
                    const commentBtn = document.querySelector(`.comment-btn[data-post-id="${postId}"] span`);
                    if (commentBtn) {
                        const currentCount = parseInt(commentBtn.textContent);
                        commentBtn.textContent = Math.max(0, currentCount - 1);
                    }
                    
                    this.showNotification('Комментарий удален!');
                }
            }
        }
    }

    saveProfileChanges() {
        if (!this.currentUser || this.currentUser.id === 999) return;
        
        const firstName = document.getElementById('editFirstName').value.trim();
        const lastName = document.getElementById('editLastName').value.trim();
        const faculty = document.getElementById('editFaculty').value;
        const course = document.getElementById('editCourse').value;
        const about = document.getElementById('editAbout').value.trim();
        const email = document.getElementById('editEmail').value.trim();
        
        if (!firstName || !lastName || !faculty || !course || !email) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        // Получаем полное название факультета
        const facultyNames = {
            'ИСТ': 'Информационных систем и технологий',
            'РТФ': 'Радиотехнический факультет',
            'МСФ': 'Машиностроительный факультет',
            'СФ': 'Строительный факультет',
            'ЭФ': 'Энергетический факультет'
        };
        
        const updates = {
            firstName,
            lastName,
            faculty,
            facultyName: facultyNames[faculty] || faculty,
            course,
            about,
            email
        };
        
        const updatedUser = this.db.updateUser(this.currentUser.id, updates);
        
        if (updatedUser) {
            this.currentUser = updatedUser;
            this.db.setCurrentUser(updatedUser);
            this.updateUserPanel();
            this.loadPage('profile');
            this.showNotification('Профиль успешно обновлен!');
        }
    }

    handleAvatarUpload(event) {
        if (!this.currentUser || this.currentUser.id === 999) return;
        
        const file = event.target.files[0];
        if (!file) return;
        
        if (!file.type.startsWith('image/')) {
            alert('Пожалуйста, выберите изображение');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            alert('Файл слишком большой. Максимальный размер: 5MB');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.getElementById('editAvatarPreview');
            if (preview) {
                preview.src = e.target.result;
            }
            
            // Обновляем аватар пользователя
            this.currentUser.avatar = e.target.result;
            this.db.updateUser(this.currentUser.id, { avatar: e.target.result });
            this.db.setCurrentUser(this.currentUser);
            this.updateUserPanel();
            this.showNotification('Аватар обновлен!');
        };
        reader.readAsDataURL(file);
    }

    // Авторизация и регистрация
    login(email, password) {
        const user = this.db.getUserByEmail(email);
        
        if (!user) {
            throw new Error('Пользователь с таким email не найден');
        }
        
        if (user.password !== password) {
            throw new Error('Неверный пароль');
        }
        
        this.currentUser = user;
        this.db.setCurrentUser(user);
        this.updateUserPanel();
        this.loadPage('profile');
        this.hideModal('authModal');
        this.showNotification(`Добро пожаловать, ${user.firstName}!`);
    }

    register(userData) {
        // Проверяем, существует ли пользователь
        const existingUser = this.db.getUserByEmail(userData.email);
        if (existingUser) {
            throw new Error('Пользователь с таким email уже существует');
        }
        
        // Проверяем совпадение паролей
        if (userData.password !== userData.confirmPassword) {
            throw new Error('Пароли не совпадают');
        }
        
        // Получаем полное название факультета
        const facultyNames = {
            'ИСТ': 'Информационных систем и технологий',
            'РТФ': 'Радиотехнический факультет',
            'МСФ': 'Машиностроительный факультет',
            'СФ': 'Строительный факультет',
            'ЭФ': 'Энергетический факультет'
        };
        
        // Создаем пользователя
        const newUser = this.db.createUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            faculty: userData.faculty,
            facultyName: facultyNames[userData.faculty] || userData.faculty,
            course: '1',
            about: 'Новый пользователь МедиаХаб УлГТУ',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`
        });
        
        // Автоматически входим
        this.currentUser = newUser;
        this.db.setCurrentUser(newUser);
        this.updateUserPanel();
        this.loadPage('profile');
        this.hideModal('authModal');
        this.showNotification(`Регистрация успешна! Добро пожаловать, ${newUser.firstName}!`);
    }

    // Гостевой вход
    guestLogin() {
        const guestUser = {
            id: 999,
            email: 'guest@ulstu.ru',
            firstName: 'Гость',
            lastName: 'УлГТУ',
            faculty: 'Гость',
            facultyName: 'Гостевой доступ',
            course: '0',
            about: 'Гостевой пользователь. Зарегистрируйтесь для полного доступа.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=guest',
            subscribers: [],
            subscriptions: [],
            communities: [],
            createdAt: new Date().toISOString()
        };
        
        this.currentUser = guestUser;
        this.db.setCurrentUser(guestUser);
        this.updateUserPanel();
        this.loadPage('home');
        this.hideModal('authModal');
        this.showNotification(`Добро пожаловать, Гость! Зарегистрируйтесь для полного доступа.`);
    }

    logout() {
        this.db.logout();
        this.currentUser = null;
        this.updateUserPanel();
        this.loadPage('home');
        this.showNotification('Вы вышли из системы');
    }

    // Обновление интерфейса
    updateUserPanel() {
        const userPanel = document.getElementById('userPanel');
        
        if (this.currentUser) {
            userPanel.innerHTML = `
                <div class="user-info">
                    <img src="${this.currentUser.avatar}" alt="Аватар" class="user-avatar" id="userAvatar">
                    <span class="user-name">${this.currentUser.firstName}</span>
                    <button class="btn-logout" id="logoutBtn">
                        <i class="fas fa-sign-out-alt"></i> Выйти
                    </button>
                </div>
            `;
            
            // Обработчики для авторизованного пользователя
            if (this.currentUser.id !== 999) {
                document.getElementById('userAvatar')?.addEventListener('click', () => {
                    this.loadPage('profile');
                });
            }
            
            document.getElementById('logoutBtn')?.addEventListener('click', () => {
                this.logout();
            });
            
            // Обновляем навигацию для профиля
            document.querySelectorAll('nav a').forEach(link => {
                if (link.getAttribute('data-page') === 'profile') {
                    link.style.display = this.currentUser.id !== 999 ? 'flex' : 'none';
                }
            });
        } else {
            userPanel.innerHTML = `
                <button class="btn-login" id="loginBtn">
                    <i class="fas fa-user"></i> Войти
                </button>
            `;
            
            document.getElementById('loginBtn')?.addEventListener('click', () => {
                this.showModal('authModal');
            });
            
            // Скрываем ссылку на профиль
            document.querySelectorAll('nav a').forEach(link => {
                if (link.getAttribute('data-page') === 'profile') {
                    link.style.display = 'none';
                }
            });
        }
    }

    // Модальные окна
    setupModals() {
        // Модалка авторизации
        const authModal = document.getElementById('authModal');
        const closeAuthModal = authModal.querySelector('.close-modal');
        
        closeAuthModal.addEventListener('click', () => {
            this.hideModal('authModal');
        });
        
        // Переключение между вкладками
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                this.switchAuthTab(tabName);
            });
        });
        
        // Форма входа
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            
            try {
                this.login(email, password);
            } catch (error) {
                alert(error.message);
            }
        });
        
        // Гостевой вход
        document.getElementById('guestLoginBtn')?.addEventListener('click', () => {
            this.guestLogin();
        });
        
        // Форма регистрации
        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const userData = {
                firstName: document.getElementById('regFirstName').value.trim(),
                lastName: document.getElementById('regLastName').value.trim(),
                email: document.getElementById('regEmail').value.trim(),
                password: document.getElementById('regPassword').value.trim(),
                confirmPassword: document.getElementById('regConfirmPassword').value.trim(),
                faculty: document.getElementById('regFaculty').value
            };
            
            try {
                this.register(userData);
            } catch (error) {
                alert(error.message);
            }
        });
        
        // Ссылки для переключения между формами
        document.querySelector('.switch-to-register')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.switchAuthTab('register');
        });
        
        document.querySelector('.switch-to-login')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.switchAuthTab('login');
        });
        
        // Модалка выбора аватара
        this.setupAvatarModal();
        
        // Закрытие модалок по клику вне окна
        window.addEventListener('click', (e) => {
            if (e.target === authModal) {
                this.hideModal('authModal');
            }
            const avatarModal = document.getElementById('avatarModal');
            if (e.target === avatarModal) {
                this.hideModal('avatarModal');
            }
            const addFriendModal = document.getElementById('addFriendModal');
            if (e.target === addFriendModal) {
                this.hideModal('addFriendModal');
            }
            const communityModal = document.getElementById('communityModal');
            if (e.target === communityModal) {
                this.hideModal('communityModal');
            }
        });
    }

    setupAvatarModal() {
        const avatarModal = document.getElementById('avatarModal');
        const closeAvatarModal = avatarModal.querySelector('.close-modal');
        
        closeAvatarModal.addEventListener('click', () => {
            this.hideModal('avatarModal');
        });
        
        // Переключение между вкладками
        document.querySelectorAll('.avatar-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                this.switchAvatarTab(tabName);
            });
        });
        
        // Загрузка фото
        const avatarUploadArea = document.getElementById('avatarUploadArea');
        const avatarFileInput = document.getElementById('avatarFileInput');
        const avatarPreview = document.getElementById('avatarPreview');
        const saveAvatarBtn = document.getElementById('saveAvatarBtn');
        
        avatarUploadArea.addEventListener('click', () => {
            avatarFileInput.click();
        });
        
        avatarFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            if (!file.type.startsWith('image/')) {
                alert('Пожалуйста, выберите изображение');
                return;
            }
            
            if (file.size > 5 * 1024 * 1024) {
                alert('Файл слишком большой. Максимальный размер: 5MB');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarPreview.src = e.target.result;
                saveAvatarBtn.disabled = false;
            };
            reader.readAsDataURL(file);
        });
        
        // Сохранение загруженного аватара
        saveAvatarBtn.addEventListener('click', () => {
            if (avatarPreview.src && this.currentUser && this.currentUser.id !== 999) {
                this.currentUser.avatar = avatarPreview.src;
                this.db.updateUser(this.currentUser.id, { avatar: avatarPreview.src });
                this.db.setCurrentUser(this.currentUser);
                this.updateUserPanel();
                this.fillProfileData();
                this.fillEditForm();
                this.hideModal('avatarModal');
                this.showNotification('Аватар обновлен!');
            }
        });
        
        // Выбор готового аватара
        document.querySelectorAll('.select-avatar').forEach(btn => {
            btn.addEventListener('click', () => {
                const avatarNum = btn.getAttribute('data-avatar');
                const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=student${avatarNum}`;
                
                // Обновляем аватар пользователя
                if (this.currentUser && this.currentUser.id !== 999) {
                    this.currentUser.avatar = avatarUrl;
                    this.db.updateUser(this.currentUser.id, { avatar: avatarUrl });
                    this.db.setCurrentUser(this.currentUser);
                    this.updateUserPanel();
                    this.fillProfileData();
                    this.fillEditForm();
                    this.hideModal('avatarModal');
                    this.showNotification('Аватар обновлен!');
                }
            });
        });
        
        // Drag and drop для загрузки фото
        avatarUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            avatarUploadArea.style.borderColor = '#ff6b00';
        });
        
        avatarUploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            avatarUploadArea.style.borderColor = '#ddd';
        });
        
        avatarUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            avatarUploadArea.style.borderColor = '#ddd';
            
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                if (file.size > 5 * 1024 * 1024) {
                    alert('Файл слишком большой. Максимальный размер: 5MB');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarPreview.src = e.target.result;
                    saveAvatarBtn.disabled = false;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    switchAuthTab(tabName) {
        // Переключаем вкладки
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-tab') === tabName);
        });
        
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.toggle('active', form.id === `${tabName}Form`);
        });
    }

    switchAvatarTab(tabName) {
        // Переключаем вкладки
        document.querySelectorAll('.avatar-tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-tab') === tabName);
        });
        
        document.querySelectorAll('.avatar-upload-tab, .avatar-choose-tab').forEach(tab => {
            tab.classList.toggle('active', tab.classList.contains(`avatar-${tabName}-tab`));
        });
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Уведомления
    showNotification(message) {
        // Создаем элемент уведомления
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Стили для уведомления
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 2000;
            animation: slideIn 0.3s ease;
        `;
        
        // Анимация
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 3 секунды
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 300);
        }, 3000);
    }
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MediaHubApp();
    
    // Глобальный доступ к приложению для отладки
    console.log('МедиаХаб УлГТУ загружен! Используйте window.app для отладки.');
    
    // Тестовые данные для демонстрации
    console.log('Демо-аккаунты:');
    console.log('1. nikita@ulstu.ru / 123456 (Никита Еремеев)');
    console.log('2. alexander@ulstu.ru / 123456 (Александр Сазонов)');
    console.log('3. student@ulstu.ru / 123456 (Студент Тестовый)');
    console.log('Или войдите как гость');
    
    // Информация о новых данных
    console.log('Добавлено 50 новых пользователей и 10 новостей (20 ноября - 10 декабря 2025)');
});