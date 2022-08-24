<?php

namespace App\Http\Controllers;

use App\Models\Requests;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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

    public function getRequests(Request $request)
    {
        return DB::select('select * from REQUESTS where user_id  = ? and request_status = ?', [Auth::id(), 'checking']);
    }

    public function getEmployeeRequests(Request $request)
    {
        return DB::select('select * from REQUESTS where employee_id  = ? and request_status != ?', [Auth::id(), 'checking']);
    }

    public function changeRequestStatus(Request $request)
    {
        Requests::find($request->id)->update($request->post());
    }


}
