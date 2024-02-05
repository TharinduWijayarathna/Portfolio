<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function contact(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'subject' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);

        Contact::create($request->all());

        return 1;
    }
}
