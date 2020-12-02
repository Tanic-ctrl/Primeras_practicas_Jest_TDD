test('Probar Objetos', () => {
    const datos = { one: 1 };
    datos['two'] = 2;
    expect(datos).toEqual({ one: 1, two: 2 });
});

test('Probar un for', () => {
    for (var i = 0; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            expect(i + j).not.toBe(0)
        }
    }
});

test('Validaciones con sumar', () => {
    const sumar = 3 + 4;
    expect(sumar).toBe(7);
    expect(sumar).toEqual(7);
    expect(sumar).not.toEqual(6)
    expect(sumar).toBeGreatherThan(6);
    expect(sumar).toBeGreatherThanOrEqual(7);
    expect(sumar).toBeLessThan(8);
    expect(sumar).toBeLessThanOrEqual(9.5);
});

test('Suma de números flotantes', () => {
    const valor = 0.1 + 0.3;
    expect(valor).toBeCloseTo(0.4)
});

test('Esta cadena no contiene i', () => {
    expect('team').not.toMatch(/I/);
});

Test('Contiene la palabra Stop', () => {
    expect('Christopher').toMath(/stop/);
})