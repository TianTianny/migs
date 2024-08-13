<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AdditionalProgramResource\Pages;
use App\Filament\Resources\AdditionalProgramResource\RelationManagers;
use App\Models\AdditionalProgram;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AdditionalProgramResource extends Resource
{
    protected static ?string $model = AdditionalProgram::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->label('Name'),
                Textarea::make('description')
                    ->nullable()
                    ->label('Description'),
                FileUpload::make('image_url')
                    ->image()
                    ->maxSize(1024)
                    ->nullable()
                    ->label('Program Image'),
                Toggle::make('is_active')
                    ->default(true)
                    ->label('Active'),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0)
                    ->label('Sort Order'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Name'),
                TextColumn::make('description')
                    ->label('Description')
                    ->limit(50),
                ImageColumn::make('image_url')
                    ->label('Image'),
                TextColumn::make('is_active')
                    ->label('Active')
                    ->formatStateUsing(fn(bool $state) => $state ? 'Yes' : 'No'),
                TextColumn::make('sort_order')
                    ->label('Sort Order'),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAdditionalPrograms::route('/'),
            'create' => Pages\CreateAdditionalProgram::route('/create'),
            'view' => Pages\ViewAdditionalProgram::route('/{record}'),
            'edit' => Pages\EditAdditionalProgram::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
