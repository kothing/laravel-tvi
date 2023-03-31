[![Laravel TVI](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/readme-header.png)](https://tvi-demo.liamthursfield.test)

Laravel TVI is a base CMS for creating & managing websites.


## About Laravel TVI

## Core Stack
- [Laravel](https://laravel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue.js](https://vuejs.org/)
- [Inertia](https://inertiajs.com/)


---

## How to start

**1. Clone From Github**
```bash
git clone https://github.com/lyove/laravel-tvi.git
```

**2. Go to that folder**
```bash
cd laravel-tvi
```

**3. Required Configuration**

PHP  
1. fileinfo extensions
1. putenv() enable
1. proc_open() enable

Permission for directories. 
1. storage 777
1. bootstrap/cache 777
1. public 777

**4. Install Composer**
```php
composer install
```

**5. Create and config env file**
```bash
Create a .env file by cloning .env.example file
```

**6. Generate app APP_KEY**
```
php artisan key:generate
```

**7. Create a Database named**
```bash
your-database
```

**8. Run Migration & Seed**
```php
php artisan migrate:fresh --seed
```

**9. Run On Local Machine**  
start Laravel's local development server
```bash
php artisan serve
```
and open browser at `http://localhost:8000`


**10. Go to CMS admin dashborad**  
Login Now by giving this data.
```php
Username: xxx
Password: xxx
```
You can find it in `database/seeders/UserRoleSeeder.php`

---

## Screenshots

**Homepage**

![Homepage](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/app_home.png)

**Auth - Login**

![Auth - Login](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/login.png)

**Admin - Dashboard**

![Admin - Dashboard](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/admin_dashboard.png)

**Admin - User Management**

![Admin - User Management](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/admin_user_management.png)

**Admin - Index/Search Page**

![Admin - Index/Search Page](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/admin_index.png)

**Admin - Create Page**

![Admin - Create Page](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/admin_create.png)

**Admin - File Manager**

![Admin - File Manager](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/admin_filemanager.png)

**Admin - Modal**

![Admin - Modal](https://raw.githubusercontent.com/LiamThursfield/laravel-tvi/master/.github/screenshots/admin_modal.png)

---------


## Acknowledgements

### Icons
- [Tabler icons](https://github.com/tabler/tabler-icons)
- [Tailwind icons](https://tailwindcss.com/docs)

### Design/UI/UX inspiration
- [Argon](https://demos.creative-tim.com/argon-dashboard-pro/pages/dashboards/dashboard.html)
- [Bootstrap Themes](https://themes.getbootstrap.com/)
- [css.lab](https://csslab.app/)
- [Front](https://htmlstream.com/front-dashboard/index.html)
- [Keen](https://preview.keenthemes.com/keen/demo1/index.html)
- [Oppi](https://droitthemes.com/wp/oppi/)
