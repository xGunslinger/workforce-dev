<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', function () {
    return view('home');
});

Route::view('/schedule', 'home')
    ->where('/schedule', '.*');

Route::view('/requests', 'home')
    ->where('/requests', '.*');

Route::view('/notifications', 'home')
    ->where('/notifications', '.*');

Route::view('/working_hours', 'home')
    ->where('/working_hours', '.*');

Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');

Route::get('status', [UserController::class, 'userOnlineStatus']);

Route::get('/api/user', [App\Http\Controllers\UserController::class, 'index']);

Route::get('/api/users', [App\Http\Controllers\UserController::class, 'allUsers']);

Route::post('/api/user/status', [App\Http\Controllers\UserController::class, 'changeStatus']);

Route::post('/api/request', [App\Http\Controllers\RequestsController::class, 'storeRequest']);

Route::get('/api/supervisors', [App\Http\Controllers\UserController::class, 'supervisors']);

Route::get('/api/requests', [App\Http\Controllers\RequestsController::class, 'getRequests']);

Route::post('/api/requests/status', [App\Http\Controllers\RequestsController::class, 'changeRequestStatus']);

Route::get('/api/requests/employee', [App\Http\Controllers\RequestsController::class, 'getEmployeeRequests']);



