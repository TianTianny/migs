<?php

namespace App\Filament\Resources\AdditionalProgramResource\Pages;

use App\Filament\Resources\AdditionalProgramResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAdditionalProgram extends EditRecord
{
    protected static string $resource = AdditionalProgramResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }
}
