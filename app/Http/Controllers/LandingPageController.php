<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index(Request $request)
    {
        $heroes = Hero::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['title', 'subtitle', 'image_url']);

        $programs = Program::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['name', 'description', 'image_url']);

        return Inertia::render('Welcome', [
            'heroes' => $heroes,
            'programs' => $programs,
        ]);
    }
}
