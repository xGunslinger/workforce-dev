<?php

namespace App\Http\Controllers;

use App\Models\Requests;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RequestsController extends Controller
{
    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storeRequest(Request $request)
    {
        Requests::create($request->post()+['employee_id'=>Auth::id()]);
    }
}
