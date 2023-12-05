import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '../../testUtils';
import { useQuery } from '@tanstack/react-query';
import ploneClient from '../../client';

const cli = ploneClient.initialize({
  apiPath: 'http://localhost:55001/plone',
});

const { login, getControlpanelsQuery } = cli;
await login({ username: 'admin', password: 'secret' });

describe('[GET] ControlpanelList', () => {
  test('Hook - Successful', async () => {
    const { result } = renderHook(() => useQuery(getControlpanelsQuery({})), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.[0]).toHaveProperty('@id');
    expect(result.current.data?.[0]).toHaveProperty('title');
    expect(result.current.data?.[1]).toHaveProperty('@id');
    expect(result.current.data?.[1]).toHaveProperty('title');
  });
});
