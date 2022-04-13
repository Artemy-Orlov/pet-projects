# Аnnotation
This project provides code examples for solving specific problems.
The project is made on Angular v.11 using Material CDK v.11.
At the moment, the project has completed:
- authorization form with validation by required fields, field type and minimum length with validation errors output, storage of data about the user and authorization in the service for the possibility of accessing this data from other components;
- restriction of access to the '/currency' route from the Guard associated with authorization;
- currency exchanger (data on exchange rates are obtained from the service, but stored in a local file, since open api sources are protected by CORS-policy and do not allow receiving data from localhost);
- editable data table built on the architecture of child components with data transfer between components;
- search on the GitHub server by api provided by the service, with the output of results and pagination;
- Kanban board with the ability to drag and drop tasks across columns, create new tasks, move tasks through a business process from the editing window, add comments when passing a business process.

# Аннотация
В этом проекте представлены примеры кода на решение конкретных задач.
Проект реализован на Angular v.11 с использованием Material CDK v.11.
На данный момент в проекте реализованы:
- форма авторизации с валидацией по обязательности полей, типу поля и минимальной длины с выводом ошибок валидации, хранение данных о пользователе и об авторизации в сервисе для возможности обращения к этим данным из других компонентов;
- реализация ограничения доступа к роуту '/currency' от гуарда, связанного с авторизацией;
- обменник валюты (данные по курсам валют получаются из сервиса, но хранятся в локальном файле, т.к. открытые api-источники защищены CORS-policy и не позволяют получать данные с localhost);
- редактируемая таблица данных, построенная на архитектуре дочерних компонентов с передачей данных между компонентами;
- поиск на сервере GitHub по api, предоставлямому сервисом, с выводом результатов и пагинацией;
- доска Канбан с возможностью перетаскивания задач по колонкам с помощью Drag&Drop, создание новых задач, движение задач по бизне-процессу из окна редактирования, возможности добавления комментариев при прохождении бизнес-процесса.
