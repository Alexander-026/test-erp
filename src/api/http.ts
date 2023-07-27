export async function GET<T>(url: string): Promise<T> {
  const ret = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  if (ret.ok) {
    return ret.json();
  } else {
    throw new Error(JSON.stringify(ret));
  }
}

export async function POST<T>(url: string, body: T | null = null): Promise<T> {
  const ret = await fetch(url, {
    method: "POST",
    body: body && JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  if (ret.ok) {
    return ret.json();
  } else {
    throw new Error(JSON.stringify(ret.json()));
  }
}

export async function DELETE<T>(url: string): Promise<T> {
  const ret = await fetch(url, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  if (ret.ok) {
    return ret.json();
  } else {
    throw new Error(JSON.stringify(ret.json()));
  }
}
